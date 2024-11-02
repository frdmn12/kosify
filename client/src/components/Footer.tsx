import { Button } from "@/components/ui/button"; // Pastikan Anda mengimpor komponen Button dari ShadCN


const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-b-2 text-black py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Kosify</h2>
            <p className="text-gray-400">Satu Klik dan Tingkatkan Kepuasan Penghuni Anda</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold">Tautan</h3>
              <ul className="space-y-2">
                <li><Button variant="default" >Beranda</Button></li>
                <li><Button variant="default" >Tentang Kami</Button></li>
                <li><Button variant="default" >Layanan</Button></li>
                <li><Button variant="default" >Kontak</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Kontak</h3>
              <ul className="space-y-2">
                <li>Email: <a href="mailto:info@example.com" className="hover:text-gray-400">info@example.com</a></li>
                <li>Telepon: <a href="tel:+62123456789" className="hover:text-gray-400">+62 123 456 789</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t  pt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Kosify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;