import { LinkedIn } from "@mui/icons-material";
function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="flex flex-wrap justify-end gap-4 items-center">
          <a href="#">LinkedIn</a>
          <a href="#">Infojobs</a>
          <p className="text-center">
            © 2024 APIREST. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
