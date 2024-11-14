const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 rounded-none w-full max-w-lg shrink-0 shadow-2xl">
          <form className="card-body">
            <h2 className="text-black font-semibold text-center text-xl">
              Register your account
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input rounded-none input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">PhotoURL</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                className="input rounded-none input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input rounded-none input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input rounded-none input-bordered"
                required
              />
              <label className="label flex items-center gap-2">
                <input type="checkbox" />
                <p>Accept Term & Conditions</p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral text-white">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
