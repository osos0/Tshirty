import { useState } from "react";

const CanvaDesignWithText = ({ embedLink, link, title }) => {
  const [customText, setCustomText] = useState("");

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="اكتب اسمك او النص اللي تحبه"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            color: "white",
            fontSize: "20px",
            background: "rgba(0,0,0,0.5)",
            padding: "5px 10px",
            borderRadius: "5px",
            zIndex: 10,
          }}
        >
          {customText || title}
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "128.5714%",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src={embedLink}
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

export default CanvaDesignWithText;
