<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>
<%
String email = request.getParameter("email");
String senha = request.getParameter("senha");

String url = "jdbc:mysql://localhost:3306/ridetec";
String usuario = "root";
String password = "";

Class.forName("com.mysql.cj.jdbc.Driver");

try (Connection conn = DriverManager.getConnection(url, usuario, password)) {
    String sql = "SELECT * FROM login WHERE email = ? AND senha = ?";
    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
        stmt.setString(1, email);
        stmt.setString(2, senha);
        try (ResultSet rs = stmt.executeQuery()) {
            if (rs.next()) {
                // Login bem-sucedido, redireciona para a home
                response.sendRedirect("home_ridetech.html");
                return;
            } else {
                out.println("<h2>Email ou senha incorretos.</h2>");
            }
        }
    }
} catch (SQLException e) {
    out.println("<h2>Erro ao conectar ao banco de dados: " + e.getMessage() + "</h2>");
}
%>
