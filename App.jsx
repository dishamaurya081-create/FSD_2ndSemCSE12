function App() {
  return (
    <div
      style={{
        backgroundColor: "#e6e6e6",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          width: "400px",
          padding: "35px",
          borderRadius: "12px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "blue",
            fontSize: "30px",
            marginBottom: "10px",
          }}
        >
        Student Registration Form
        </h1>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "400",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "6px",
            fontSize: "20px",
            outline: "none",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "400",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "6px",
            fontSize: "20px",
            outline: "none",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "400",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "6px",
            fontSize: "20px",
            outline: "none",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "400",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "6px",
            fontSize: "20px",
            outline: "none",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={{
            width: "400",
            padding: "15px",
            border: "2px solid gray",
            borderRadius: "6px",
            fontSize: "20px",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            width: "400",
            padding: "15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "24px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;