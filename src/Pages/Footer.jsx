import "./../styles/pages/footer.scss";

function Footer() {
  // const year = new Date.getFullYear();
  return (
    <footer className="footer">
      <div className="container-parts">
      <img src="/Logo.png" alt="" />
        <p>&copy; {new Date().getFullYear() } <span>H Programmer</span> - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;