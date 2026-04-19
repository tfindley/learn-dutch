# Container Security Risk Register

**Image:** `code.findley.pm/artifacts/learn-dutch:latest`
**Scan date:** 2026-04-19
**Scanner:** grype
**Scan file:** `vuln-report-code.findley.pm-artifacts-learn-dutch-latest-grype-2026-04-19.json`
**Previous scan:** 2026-04-08 (3 critical / 37 high / 45 medium / 13 low → now 1 critical / 17 high / 22 medium / 2 low — significant reduction driven by the weekly `apk upgrade` rebuild)

---

## Context

This image is a **static file server**: nginx serves pre-built HTML/CSS/JS assets. There is no server-side processing, no database, no authentication endpoint, no upstream proxy, no mail relay, no DAV, and no HTTP/2. The nginx config (`nginx.conf`) is minimal: `try_files` routing and a `/healthz` endpoint.

This context is critical to the exposure analysis below — many CVEs affect nginx or Alpine packages in features that are **compiled into the binary but not configured or reachable** in this deployment.

---

## Summary

| Status | Count | Description |
|--------|-------|-------------|
| REMEDIATE — auto | 10 | Alpine fix available; `apk upgrade` picks these up on next rebuild |
| ACCEPTED — not applicable | 34 | Vulnerable code path cannot be reached in this deployment |
| MONITOR | 2 | No fix yet; periodically check Alpine for package update |

---

## Group 1 — OpenSSL (libcrypto3, libssl3) · REMEDIATE

| CVE | Severity | Fixed In | Notes |
|-----|----------|----------|-------|
| CVE-2026-28388 | HIGH | 3.3.7-r0 | No public description yet |
| CVE-2026-28389 | HIGH | 3.3.7-r0 | No public description yet |
| CVE-2026-28390 | HIGH | 3.3.7-r0 | No public description yet |
| CVE-2026-31790 | HIGH | 3.3.7-r0 | No public description yet |
| CVE-2026-28387 | UNKNOWN | 3.3.7-r0 | No public description yet |
| CVE-2026-31789 | UNKNOWN | 3.3.7-r0 | No public description yet |

**Status:** REMEDIATE — AUTO
**Action:** All six CVEs are fixed in OpenSSL 3.3.7-r0 which is in Alpine's package repository. The Dockerfile already runs `apk upgrade --no-cache` in the serve stage, so these will be resolved on the next container build. Trigger a manual CI rebuild (`workflow_dispatch`) if you want these resolved before the next Monday scheduled run.

---

## Group 2 — musl / musl-utils · REMEDIATE

| CVE | Severity | Fixed In | Notes |
|-----|----------|----------|-------|
| CVE-2026-40200 | HIGH | 1.2.5-r11 | No public description yet |
| CVE-2026-6042 | MEDIUM | 1.2.5-r10 | No public description yet |

**Status:** REMEDIATE — AUTO
**Action:** Same as Group 1 — Alpine fixes are available and will be applied by `apk upgrade` on the next build.

---

## Group 3 — libpng · REMEDIATE

| CVE | Severity | Fixed In | Notes |
|-----|----------|----------|-------|
| CVE-2026-34757 | MEDIUM | 1.6.57-r0 | No public description yet |

**Status:** REMEDIATE — AUTO
**Action:** Fix available in Alpine; resolved on next rebuild.

---

## Group 4 — zlib · REMEDIATE

| CVE | Severity | Fixed In | Notes |
|-----|----------|----------|-------|
| CVE-2026-27171 | MEDIUM | 1.3.2-r0 | No public description yet |

**Status:** REMEDIATE — AUTO
**Action:** Fix available in Alpine; resolved on next rebuild.

---

## Group 5 — nginx (mail module) · ACCEPTED

| CVE | Severity | Module | Notes |
|-----|----------|--------|-------|
| CVE-2026-27651 | HIGH | ngx_mail_auth_http_module | Worker crash via CRAM-MD5/APOP auth + Auth-Wait |
| CVE-2025-53859 | MEDIUM | ngx_mail_smtp_module | SMTP memory leak (smtp_auth none + Auth-Wait) |
| CVE-2026-28753 | LOW | ngx_mail_smtp_module | CRLF injection via DNS into SMTP upstream |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** This image has no mail configuration. The nginx config (`nginx.conf`) contains only HTTP static-file serving directives. The `ngx_mail_*` modules are compiled into the Alpine nginx binary but are never loaded or reachable without a `mail { }` configuration block. There is no path from an HTTP request to any of these code paths.

---

## Group 6 — nginx (DAV module) · ACCEPTED

| CVE | Severity | Module | Notes |
|-----|----------|--------|-------|
| CVE-2026-27654 | HIGH | ngx_http_dav_module | Buffer overflow via MOVE/COPY with alias directive |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** The nginx config has no `dav_methods`, `alias`, or `location` blocks that use DAV. The exploit requires both the DAV module to be active *and* an `alias` directive to be present. Neither is true.

---

## Group 7 — nginx (mp4 module) · ACCEPTED

| CVE | Severity | Module | Notes |
|-----|----------|--------|-------|
| CVE-2026-32647 | HIGH | ngx_http_mp4_module | Buffer over-read/write via crafted MP4 |
| CVE-2026-27784 | MEDIUM | ngx_http_mp4_module | 32-bit specific variant |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** The nginx config has no `mp4` directive. Additionally, CVE-2026-27784 is explicitly for 32-bit builds; this container runs on x86_64 (64-bit). Neither path is reachable.

---

## Group 8 — nginx (upstream TLS proxy) · ACCEPTED

| CVE | Severity | Module | Notes |
|-----|----------|--------|-------|
| CVE-2026-1642 | HIGH | ngx_http_proxy_module | MITM plaintext injection into upstream TLS response |
| CVE-2026-28755 | MEDIUM | ngx_stream_ssl_module | OCSP revocation bypass (ssl_verify_client + ssl_ocsp) |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** The nginx config has no `proxy_pass` directives and no TLS configuration (`ssl_certificate`, `ssl_verify_client`, `ssl_ocsp`). This container accepts plain HTTP/80 and does not proxy to any upstream. Neither CVE has a reachable path.

---

## Group 9 — nghttp2-libs · ACCEPTED

| CVE | Severity | Notes |
|-----|----------|-------|
| CVE-2026-27135 | HIGH | Assertion failure after session termination in HTTP/2 |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** The nginx config uses `listen 80;` (HTTP/1.1 only). There is no `http2` directive. nghttp2 is present as a compiled-in dependency but the HTTP/2 code path is never activated. An attacker cannot reach this code path.

---

## Group 10 — libavif · MONITOR

| CVE | Severity | Notes |
|-----|----------|-------|
| CVE-2025-48174 | CRITICAL | Integer overflow + buffer overflow in stream.c (needs libavif ≥ 1.3.0) |
| CVE-2025-48175 | MEDIUM | Integer overflow in YUV reformatting |

**Status:** MONITOR — NO FIX YET IN ALPINE
**Rationale:** libavif is a transitive dependency of the nginx Alpine package (pulled in via image processing support). However, nginx does **not** decode AVIF files when serving them as static assets — it streams them as raw bytes without passing them through libavif. An attacker cannot feed crafted AVIF data through an HTTP request to reach the libavif code path. The risk is therefore theoretical: it would only apply if this container were repurposed to do image processing.

**Recommended review:** Check Alpine's `libavif` package version monthly. Once Alpine ships libavif ≥ 1.3.0, the fix will be applied automatically by `apk upgrade`.

---

## Group 11 — libtiff · MONITOR

| CVE | Severity | Notes |
|-----|----------|-------|
| CVE-2023-52356 | HIGH | Heap-buffer overflow via crafted TIFF in TIFFReadRGBATileExt() |
| CVE-2023-6277 | MEDIUM | OOM/DoS via small crafted TIFF in TIFFOpen() |
| CVE-2023-6228 | MEDIUM | Heap overflow in tiffcp utility |

**Status:** MONITOR — NO FIX IN ALPINE
**Rationale:** These are old (2023) CVEs with no Alpine fix upstream. Same reasoning as libavif: nginx streams TIFF files as static bytes and never calls libtiff APIs to process them. The `tiffcp` utility in CVE-2023-6228 is a CLI tool; it is not invoked by nginx. Exposure is theoretical only.

**Recommended review:** These CVEs have been present since 2023; Alpine has not shipped fixes. Check Alpine's libtiff package quarterly.

---

## Group 12 — curl · ACCEPTED

| CVE | Severity | Notes |
|-----|----------|-------|
| CVE-2026-3805 | HIGH | SMB use-after-free |
| CVE-2026-1965 | MEDIUM | Negotiate auth connection credential confusion |
| CVE-2026-3784 | MEDIUM | HTTP proxy CONNECT credential reuse |
| CVE-2026-3783 | MEDIUM | OAuth2 token leaked on redirect via .netrc |
| CVE-2025-14819 | MEDIUM | TLS partial chain CA store reuse |
| CVE-2025-15079 | MEDIUM | SSH known_hosts bypass via libssh global file |
| CVE-2025-14524 | MEDIUM | OAuth2 token cross-protocol redirect |
| CVE-2025-10966 | MEDIUM | wolfSSH SFTP MITM |
| CVE-2025-13034 | MEDIUM | Pinned pubkey skip (QUIC+ngtcp2+GnuTLS) |
| CVE-2025-14017 | MEDIUM | LDAPS multi-thread TLS option mutation |
| CVE-2025-15224 | LOW | SSH agent used unexpectedly during pubkey auth |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** curl is present in the Alpine base image as a system package but is **never invoked at container runtime**. nginx serves static HTML/CSS/JS; it does not shell out to curl, perform HTTP requests, use SMB, SSH, SFTP, LDAP, or OAuth2. None of these code paths can be reached by a user making HTTP requests to the container.

---

## Group 13 — BusyBox (wget) · ACCEPTED

| CVE | Severity | Package(s) | Notes |
|-----|----------|------------|-------|
| CVE-2025-60876 | MEDIUM | busybox, busybox-binsh, ssl_client | wget accepts CR/LF in HTTP request-target, enabling header injection |

**Status:** ACCEPTED — NOT APPLICABLE
**Rationale:** BusyBox `wget` is a system utility available inside the container's shell environment. It is not invoked by nginx during HTTP request processing. An external HTTP client making requests to port 80 cannot trigger BusyBox wget.

---

## Decisions log

| Date | Decision | Owner |
|------|----------|-------|
| 2026-04-19 | Groups 5–9, 12–13 accepted as not applicable — nginx config confirmed to not enable mail, DAV, mp4, proxy_pass, HTTP/2; curl not called at runtime | tfindley |
| 2026-04-19 | Groups 10–11 (libavif, libtiff) downgraded to MONITOR — static-serve only, no image decoding path in nginx | tfindley |
| 2026-04-19 | Groups 1–4 (OpenSSL, musl, libpng, zlib) scheduled for remediation via next container rebuild | tfindley |

---

## Review schedule

- **Weekly (Monday CI rebuild):** Alpine packages upgraded automatically — Groups 1–4 resolved on next available Alpine patch.
- **Monthly:** Check Alpine tracker for libavif ≥ 1.3.0 availability.
- **Quarterly:** Review libtiff — if Alpine publishes a fix, it will be picked up automatically.
- **On new Grype scan:** Re-run this register; remove resolved CVEs, add new entries.
