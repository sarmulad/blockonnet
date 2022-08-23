import Image from 'next/image';
import React from 'react';
import { Container, Table } from 'react-bootstrap';

function TableSection() {
  return (
    <section className="table-section">
      <Container>
        <div className="table-content">
          <h2 className="table-title">Presale stages</h2>
          <div className="table-area">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Amount of token</th>
                  <th>% Allocated</th>
                  <th>Start date</th>
                  <th>End date</th>
                  <th>Weeks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <span>Stage 1</span>
                  </th>
                  <td>9000000</td>
                  <td>18</td>
                  <td>27 July</td>
                  <td>2 September</td>
                  <td>5.28</td>
                </tr>
                <tr>
                  <th>
                    <span>Stage 2</span>
                  </th>
                  <td>3750000</td>
                  <td>7.5</td>
                  <td>2 September</td>
                  <td>17 October</td>
                  <td>6.42</td>
                </tr>
                <tr>
                  <th>
                    <span>Stage 3</span>
                  </th>
                  <td>2250000</td>
                  <td>4.5</td>
                  <td>17 October</td>
                  <td>2 December</td>
                  <td>6.57</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
      <div className="table-bg">
        <Image
          src="/images/roadmap.png"
          alt="roadmap"
          width={1512}
          height={1324}
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default TableSection;
