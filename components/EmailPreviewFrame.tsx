"use client";

export default function EmailPreviewFrame({ html, title }: { html: string; title: string }) {
  return (
    <iframe
      srcDoc={html}
      style={{ width: "100%", border: "none", display: "block", minHeight: "1200px" }}
      title={title}
      onLoad={(e) => {
        const iframe = e.currentTarget;
        if (iframe.contentDocument) {
          iframe.style.height = iframe.contentDocument.documentElement.scrollHeight + "px";
        }
      }}
    />
  );
}
