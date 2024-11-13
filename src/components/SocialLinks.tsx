// components/SocialLinks.tsx
export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/company/baystone-design/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-white transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.941v5.665h-3.554v-11.482h3.414v1.569h.049c.475-.901 1.637-1.851 3.37-1.851 3.605 0 4.269 2.37 4.269 5.455v6.309zm-13.358-13.368c-1.146 0-2.078-.931-2.078-2.078 0-1.146.931-2.078 2.078-2.078s2.078.932 2.078 2.078c0 1.146-.931 2.078-2.078 2.078zm1.777 13.368h-3.554v-11.482h3.554v11.482zm14.132-20.452h-20.451c-1.104 0-2 .896-2 2v20.451c0 1.104.896 2 2 2h20.451c1.104 0 2-.896 2-2v-20.451c0-1.104-.896-2-2-2z" />
        </svg>
      </a>

      <a
        href="https://www.instagram.com/caldayham.design/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-gray-500 hover:text-white transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2.1.3 2.9.7a5.8 5.8 0 012.1 2.1c.4.8.6 1.7.7 2.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2.1-.7 2.9a5.8 5.8 0 01-2.1 2.1c-.8.4-1.7.6-2.9.7-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2.1-.3-2.9-.7a5.8 5.8 0 01-2.1-2.1c-.4-.8-.6-1.7-.7-2.9-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2.1.7-2.9A5.8 5.8 0 014.2 3c.8-.4 1.7-.6 2.9-.7C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1c-1.3.1-2.5.3-3.6.9a7.8 7.8 0 00-2.9 2.9C.3 5.3.1 6.5 0 7.8c-.1 1.3-.1 1.7-.1 4.2s0 2.9.1 4.2c.1 1.3.3 2.5.9 3.6a7.8 7.8 0 002.9 2.9c1.1.6 2.3.8 3.6.9 1.3.1 1.7.1 4.2.1s2.9 0 4.2-.1c1.3-.1 2.5-.3 3.6-.9a7.8 7.8 0 002.9-2.9c.6-1.1.8-2.3.9-3.6.1-1.3.1-1.7.1-4.2s0-2.9-.1-4.2c-.1-1.3-.3-2.5-.9-3.6a7.8 7.8 0 00-2.9-2.9C19.5.3 18.3.1 17 .1 15.7 0 15.3 0 12 0zM12 5.8A6.2 6.2 0 005.8 12 6.2 6.2 0 0012 18.2 6.2 6.2 0 0018.2 12 6.2 6.2 0 0012 5.8zm0 10.3A4.1 4.1 0 017.7 12 4.1 4.1 0 0112 7.7 4.1 4.1 0 0116.3 12 4.1 4.1 0 0112 16.1zM18.4 4.6a1.4 1.4 0 01-2.8 0 1.4 1.4 0 012.8 0z" />
        </svg>

      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61567507831501"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-gray-500 hover:text-white transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.497v-9.294h-3.116v-3.622h3.116v-2.672c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.098 2.797.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.762v2.315h3.588l-.467 3.622h-3.121v9.294h6.116c.733 0 1.325-.592 1.325-1.325v-21.351c0-.733-.592-1.325-1.325-1.325z" />
        </svg>
      </a>
    </div>
  );
}
