# Android and Wear OS public release update — 2026-11-10

Play Console now shows phone **1.1.4/code5** and Wear **1.1.4/code1000003** as published, with both release pages displaying **8 November 2026, 16:30** and 178 countries/regions. The [public US English listing](https://play.google.com/store/apps/details?id=com.guitar123.toolbox&hl=en_US&gl=US) is accessible. This establishes public distribution, not physical-device, purchase or full-region acceptance.

Updated the bilingual support answers, press kit, bilingual 1.1.4 release guides and README to reflect this release. Added the public Google Play destination to support/press actions and the shared footer. Existing Apple-only screenshots, feature conditions and separate App Store/Google Play purchase entitlements remain explicit. The existing local cleanup commit removing the old 1.0.7 ZIP block is included in the publication.

The old ZIP returned HTTP 200 before this deployment; it was not a broken live download. Its removal brings the deployed media kit into line with the previous local cleanup.

The unchanged publication workflow requires dependency audit, lint, existing tests, static build, local-link and release/SEO checks. A new development dependency advisory was fixed through the scoped override documented in [DEPENDENCY_NOTES](../DEPENDENCY_NOTES.md). No validation gate was removed.

Local validation after the final override: dependency gate reported zero known advisories; lint and all 18 existing tests passed; static export finalized 210 HTML files; the page audit checked 296 local targets; the release audit checked 207 canonical pages, 13 localized release pages, 12 release guides and 94 image entries. The changed support/press/release pages were also checked for the Google Play destination and removal of the outdated Android-unconfirmed wording; the old ZIP reference is absent from the generated press page. Transient registry TLS/download errors were recovered using lockfile-integrity-verified package bytes and the normal audit gate.

The associated Play Console metadata maintenance is submission **ID7**, **10 November 2026 12:18**, **in review**: the application-level trader declaration and the existing Chinese/US English full descriptions corrected from seven to ten paid themes. This is separate from the website deployment; no App package was rebuilt or uploaded.

Final build/deploy and public-content verification are recorded in the parent App's `APP交接文档.md` section 96 and private `资料归档/08-验证证据/2026-11-10/play-maintenance/` records. Account details, private links and credentials are not part of this repository.
