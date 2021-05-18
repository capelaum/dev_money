import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/05/2021</td>
          </tr>
          <tr>
            <td>Monitor</td>
            <td className="withdraw">- R$1.500</td>
            <td>Setup</td>
            <td>21/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}