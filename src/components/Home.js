

function Home() {
  return (
    <div className="container mt-3" style={{ textAlign: 'center' }}>
      <nav className="text-center py-1 rounded">
        <div className="d-flex justify-content-center gap-3">
          <a href="/login" className="btn btn-primary">Login</a>
          <a href="/signup" className="btn btn-primary">Sign Up</a>
          <a href="/dashboard" className="btn btn-primary">Dashboard</a>
          <a href="/gallery" className="btn btn-primary">Gallery</a>
          <a href="/contactus" className="btn btn-primary">ContactUs</a>

        </div>

      </nav>
    </div>
  );
}

export default Home;