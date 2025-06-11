=<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>

<%
String email = request.getParameter("email");
String senha = request.getParameter("senha");
String confirmarsenha = request.getParameter("confirmarsenha");

// Verifica se as senhas coincidem
if (!senha.equals(confirmarsenha)) {
    out.println("<h2>Erro: As senhas não coincidem!</h2>");
    return;
}

String url = "jdbc:mysql://localhost:3306/ridetec";
String usuario = "root";
String password = "";

Class.forName("com.mysql.cj.jdbc.Driver");

try (Connection conn = DriverManager.getConnection(url, usuario, password)) {
    String sql = "INSERT INTO usuarios (email, senha, confirmarsenha) VALUES (?, ?, ?)";
    try (PreparedStatement stmt = conn.prepareStatement(sql)) {
        stmt.setString(1, email);
        stmt.setString(2, senha); // Idealmente, criptografe a senha antes de armazená-la
        int rowsInserted = stmt.executeUpdate();
        if (rowsInserted > 0) {
            out.println("<h2>Cadastro realizado com sucesso!</h2>");
             response.sendRedirect("home_ridetech.html");
        } else {
            out.println("<h2>Erro ao cadastrar usuário.</h2>");
        }
    }
} catch (SQLException e) {
    out.println("<h2>Erro ao conectar ao banco de dados: " + e.getMessage() + "</h2>");
}
%>
