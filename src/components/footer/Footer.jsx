import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="bottom">
        <div className="share">
          <a
            href="https://www.facebook.com/genkisushiAR"
            className="fab fa-facebook-f"
            target="_new"
          ></a>
          <a
            href="https://www.instagram.com/genkisushiar/"
            className="fab fa-instagram"
            target="_new"
          ></a>
        </div>

        <div className="credit">
          {" "}
          <span>Genki Sushi 2022</span> | todos los derechos reservados.{" "}
        </div>
      </div>
    </section>
  );
}
