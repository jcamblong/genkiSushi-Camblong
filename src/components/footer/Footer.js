import React from "react";

export default function Footer() {
  return (
    <section class="footer">
      <div class="bottom">
        <div class="share">
          <a
            href="https://www.facebook.com/genkisushiAR"
            class="fab fa-facebook-f"
            target="_new"
          ></a>
          <a
            href="https://www.instagram.com/genkisushiar/"
            class="fab fa-instagram"
            target="_new"
          ></a>
        </div>

        <div class="credit">
          {" "}
          <span>Genki Sushi 2021</span> | todos los derechos reservados.{" "}
        </div>
      </div>
    </section>
  );
}
