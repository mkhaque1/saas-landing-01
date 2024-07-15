export const Banner = () => {
  return (
    <div className=" py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF)]">
      <div className="container ">
        <div>
          <p className=" underline underline-offset-4 font-medium">
            <span className=" hidden md:inline">
              Introducing a completely redesigned interface — Explore the demo
            </span>
            <a className=" md:hidden" href="#">
              Explore the demo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
