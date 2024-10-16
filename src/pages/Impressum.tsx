import React from "react";

const Impressum: React.FC = () => {
  return (
    <div className="container">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG (Telemediengesetz):</p>

      <h2>Kontakt</h2>
      <p>
        Sebastian Koller <br />
        Ehamgasse 20/12 <br />
        1110 Wien <br />
        Österreich <br />
        <br />
        Telefon: +43 676 9105656 <br />
        E-Mail: me@sebastiankoller.at <br />
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        <strong>Haftung für Inhalte</strong> <br />
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem österreichischen Urheberrecht. Beiträge Dritter
        sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
        Autors bzw. Erstellers.
      </p>
    </div>
  );
};

export default Impressum;
