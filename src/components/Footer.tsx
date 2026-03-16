export function Footer() {
  return (
    <footer className="py-14 max-sm:py-10 text-center border-t border-border">
      <div className="section-wrap">
        <div className="font-semibold text-[11px] text-blue tracking-[2px] uppercase mb-4">
          Holo Alert
        </div>
        <p className="text-[13px] text-gray leading-relaxed">
          www.holoalert.ca &nbsp;·&nbsp; 1-888-411-4656 &nbsp;·&nbsp; support@holoalert.ca
        </p>
        <p className="text-[13px] text-gray mt-3">
          <a href="https://www.holoalert.ca/privacy-policy" className="text-gray hover:text-black transition-colors duration-200 underline underline-offset-2">
            Privacy Policy
          </a>
          <span className="mx-2 text-border">·</span>
          <a href="https://www.holoalert.ca/terms" className="text-gray hover:text-black transition-colors duration-200 underline underline-offset-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
