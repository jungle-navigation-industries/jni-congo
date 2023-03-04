const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <a href="https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=https://localhost/callback/&client_id=dd02558f01f84d38848349a7ebe4f1f0&scope=publicData">
        <button>Log In</button>
      </a>
    </div>
  );
};

export default Home;
