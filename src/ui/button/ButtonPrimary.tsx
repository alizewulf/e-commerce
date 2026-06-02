type PrimaryButton = {
    children: string
}
function PrimaryButton({children}:PrimaryButton) {
  return (
    <button className="text-white cursor-pointer font-poppins text-base leading-6 bg-button-2 hover:bg-hover-button py-4 px-12">
      {children}
    </button>
  );
}
export default PrimaryButton