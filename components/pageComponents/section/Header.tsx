interface Props {
  inputValue: string;
  setInputValue: any;
}
export const Header = (props: Props) => {
  const { inputValue, setInputValue } = props;
  return (
    <header>
      <div className="flex bg-white rounded-md">
        <img src="/icons/search.svg" alt="search icon" className="h-9" />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          className="outline-none flex-1 px-1 rounded-md text-lg"
          placeholder="search your desired category"
        />
      </div>
    </header>
  );
};
