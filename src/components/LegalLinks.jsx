const LegalLinks = () => {
  return (
    <div className="flex flex-col space-y-2">
      <a
        href="/privacy-policy"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        Privacy Policy
      </a>
      <a
        href="/terms-of-service"
        className="text-gray-400 hover:text-white transition-colors duration-300"
      >
        Terms of Service
      </a>
    </div>
  );
};

export default LegalLinks;
