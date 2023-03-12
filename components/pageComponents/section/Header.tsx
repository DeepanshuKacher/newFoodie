export const Header = () => (
  <header>
    <div className="flex bg-white rounded-md">
      <img src="/icons/search.svg" alt="search icon" className="h-9" />
      <input
        type="text"
        className="outline-none flex-1 px-1 rounded-md text-lg"
        placeholder="search your desired category"
      />
    </div>
  </header>
);
