export default function AddingAlert(props) {
  return (
    <div className="fixed top-4 right-4 bg-white text-black shadow-lg rounded-lg p-4 mt-10 w-72 animate-slide-in">
      <h3 className="font-bold text-green-600 mb-1">✅ Added To Cart</h3>
      <p className="text-sm">
        You have added{" "}
        <span className="font-semibold">{props.product.name}</span>{" "}
        successfully.
      </p>
    </div>
  );
}
