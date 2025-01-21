<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola </h1>   
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
        </tr>
        <% for (cliente of datos) { %>
            <tr>
                <td><%= cliente.nombre %></td>
                <td><%= cliente.apellidos %></td>
            </tr>
        <% } %>
    </table> 
</body>
</html>