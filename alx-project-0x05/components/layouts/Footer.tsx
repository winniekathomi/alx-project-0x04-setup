const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-10">
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} Splash App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
