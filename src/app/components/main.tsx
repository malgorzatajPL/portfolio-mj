import PopupMenu from "./popup";

export default function Main() {
  return (
    <section
      id="welcome"
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl mx-auto text-center top-1/2 -translate-y-1/2 px-6">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Welcome to Delish Bites
        </h2>
        <p className="text-lg text-gray-100 mb-8">
          Experience the finest gourmet burgers, handcrafted pizzas, and fresh
          salads in a cozy, modern setting.
        </p>
        <PopupMenu />
      </div>
    </section>
  );
}
