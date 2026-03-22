import { CourseLesson } from "./course";

export function generateEmailHTML(lesson: CourseLesson): string {
  const bodyParagraphs = lesson.body
    .split("\n\n")
    .filter((p) => p.trim())
    .map((p) => {
      const trimmed = p.trim();

      // Bold standalone lines (markdown **)
      const formatted = trimmed
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");

      // Headings (lines starting with **)
      if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
        return `<h3 style="font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:700;color:#1C1208;margin:36px 0 12px;line-height:1.3;">${trimmed.slice(2, -2)}</h3>`;
      }

      // Bullet lists
      if (trimmed.startsWith("- ")) {
        const items = trimmed
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map(
            (l) =>
              `<li style="font-size:17px;line-height:1.8;color:#3D2E1E;margin-bottom:8px;padding-left:4px;">${l
                .slice(2)
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")}</li>`
          )
          .join("");
        return `<ul style="margin:20px 0;padding-left:24px;">${items}</ul>`;
      }

      return `<p style="font-size:17px;line-height:1.85;color:#3D2E1E;margin:0 0 22px;font-family:Georgia,'Times New Roman',serif;">${formatted}</p>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Day ${lesson.day}: ${lesson.title} — Arise & Awake</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,600&display=swap" rel="stylesheet" />
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F2EBE0;font-family:Georgia,'Times New Roman',serif;">

  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Day ${lesson.day}: ${lesson.title} — ${lesson.opening}
  </div>

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#F2EBE0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

          <!-- ── TOP BRAND BAR ── -->
          <tr>
            <td align="center" style="padding-bottom:24px;">
              <p style="margin:0;font-family:'Playfair Display',Georgia,serif;font-size:13px;font-weight:700;color:#8A6A3A;letter-spacing:0.14em;text-transform:uppercase;">
                🕯️ &nbsp; Arise &amp; Awake &nbsp; 🕯️
              </p>
            </td>
          </tr>

          <!-- ── DARK HERO HEADER ── -->
          <tr>
            <td>
              <table width="100%" cellpadding="0" cellspacing="0" border="0"
                style="background-color:#1C1814;border-radius:16px 16px 0 0;overflow:hidden;">
                <tr>
                  <td style="padding:48px 48px 0;">

                    <!-- Day badge -->
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color:rgba(232,160,32,0.15);border:1px solid rgba(232,160,32,0.4);border-radius:100px;padding:5px 16px;">
                          <p style="margin:0;font-family:Georgia,serif;font-size:11px;font-weight:700;color:#E8C870;letter-spacing:0.12em;text-transform:uppercase;">
                            Day ${lesson.day} of 10 &nbsp;·&nbsp; ${lesson.theme}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Giant day number (decorative) -->
                    <p style="margin:16px 0 -16px;font-family:'Playfair Display',Georgia,serif;font-size:120px;font-weight:900;color:rgba(232,160,32,0.08);line-height:1;letter-spacing:-0.04em;">
                      ${String(lesson.day).padStart(2, "0")}
                    </p>

                    <!-- Title -->
                    <h1 style="margin:0 0 12px;font-family:'Playfair Display',Georgia,serif;font-size:38px;font-weight:900;color:#F9F4EC;line-height:1.1;letter-spacing:-0.02em;">
                      ${lesson.title}
                    </h1>

                    <!-- Subtitle -->
                    <p style="margin:0 0 36px;font-family:'Playfair Display',Georgia,serif;font-size:17px;font-weight:400;font-style:italic;color:rgba(249,244,236,0.6);line-height:1.5;">
                      ${lesson.subtitle}
                    </p>

                  </td>
                </tr>

                <!-- Amber flame divider -->
                <tr>
                  <td style="padding:0 48px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="border-top:1px solid rgba(232,160,32,0.2);"></td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Quote block -->
                <tr>
                  <td style="padding:28px 48px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0"
                      style="border-left:3px solid #E8A020;padding-left:20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 8px;font-family:'Playfair Display',Georgia,serif;font-size:16px;font-style:italic;font-weight:400;color:rgba(249,244,236,0.85);line-height:1.7;">
                            &ldquo;${lesson.quote.text}&rdquo;
                          </p>
                          <p style="margin:0;font-size:12px;font-weight:700;color:#E8A020;letter-spacing:0.08em;text-transform:uppercase;font-family:Georgia,serif;">
                            — ${lesson.quote.attribution}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── PARCHMENT BODY ── -->
          <tr>
            <td style="background-color:#FBF6EE;border-left:1px solid #E8D9C4;border-right:1px solid #E8D9C4;padding:44px 48px 8px;">

              <!-- Opening line (large) -->
              <p style="margin:0 0 28px;font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:700;font-style:italic;color:#1C1208;line-height:1.5;border-bottom:1px solid #E8D9C4;padding-bottom:28px;">
                ${lesson.opening}
              </p>

              <!-- Body content -->
              ${bodyParagraphs}

            </td>
          </tr>

          <!-- ── PRACTICE BLOCK ── -->
          <tr>
            <td style="background-color:#1C1814;border-radius:0;padding:36px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;color:#E8A020;letter-spacing:0.14em;text-transform:uppercase;font-family:Georgia,serif;">
                      Today's Practice
                    </p>
                    <h3 style="margin:0 0 20px;font-family:'Playfair Display',Georgia,serif;font-size:22px;font-weight:800;color:#F9F4EC;line-height:1.3;">
                      ${lesson.practiceTitle}
                    </h3>
                    <p style="margin:0;font-size:15px;line-height:1.8;color:rgba(249,244,236,0.75);font-family:Georgia,serif;white-space:pre-line;">
                      ${lesson.practice.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#F9F4EC;">$1</strong>')}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── CLOSING ── -->
          <tr>
            <td style="background-color:#FBF6EE;border-left:1px solid #E8D9C4;border-right:1px solid #E8D9C4;border-bottom:1px solid #E8D9C4;border-radius:0 0 16px 16px;padding:32px 48px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-top:1px solid #E8D9C4;padding-top:24px;">
                    <p style="margin:0 0 8px;font-size:15px;font-style:italic;color:#7A5C38;line-height:1.7;font-family:Georgia,serif;">
                      ${lesson.closingLine}
                    </p>
                    <p style="margin:12px 0 0;font-family:'Playfair Display',Georgia,serif;font-size:16px;font-weight:700;color:#1C1208;">
                      Keep the flame burning,
                    </p>
                    <p style="margin:4px 0 0;font-family:'Playfair Display',Georgia,serif;font-size:15px;color:#8A6A3A;font-style:italic;">
                      Arise &amp; Awake
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── FLAME DIVIDER ── -->
          <tr>
            <td align="center" style="padding:32px 0 8px;">
              <p style="margin:0;font-size:20px;">🕯️</p>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td align="center" style="padding:0 24px 40px;">
              <p style="margin:0 0 8px;font-family:'Playfair Display',Georgia,serif;font-size:13px;font-weight:700;color:#8A6A3A;letter-spacing:0.08em;">
                ARISE &amp; AWAKE
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:#A89070;line-height:1.6;font-family:Georgia,serif;">
                &ldquo;Arise, Awake, and Stop Not Till the Goal is Reached.&rdquo;<br/>
                — Swami Vivekananda
              </p>
              <p style="margin:0;font-size:11px;color:#B8A090;font-family:Georgia,serif;">
                You're receiving this because you signed up for the 10-Day Arise &amp; Awake Course.<br/>
                <a href="{{unsubscribe_url}}" style="color:#B8A090;text-decoration:underline;">Unsubscribe</a>
                &nbsp;·&nbsp;
                <a href="https://ariseandawake.com" style="color:#B8A090;text-decoration:underline;">ariseandawake.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
