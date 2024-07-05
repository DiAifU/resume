export function Header() {
  return (
    <div className="flex items-center gap-8 mb-8 justify-between">
      <img
        className="h-36 w-36 rounded-full"
        src="https://media.licdn.com/dms/image/D5603AQGhL_nZSP2ETA/profile-displayphoto-shrink_200_200/0/1719032115212?e=1724889600&v=beta&t=_ZnyDowkrOzQPuKCYQ1AwQjKXOWTPveR3O2M4y4kfvg"
        alt="Photo de Nicolas Montvernay"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Nicolas Montvernay</h1>
        <h2 className="text-2xl text-gray-700">
          CTO & Co-founder @ Xtra-energy
        </h2>
      </div>
      <div className="h-36 w-36 block"></div>
    </div>
  );
}
