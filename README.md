# xy-inc

xy-inc frontend

A XY Inc. é uma empresa especializada na produção de excelentes receptores GPS (Global Positioning System).
A diretoria está empenhada em lançar um dispositivo inovador que promete auxiliar pessoas na localização de pontos de interesse (POIs), e precisa muito de sua ajuda.
Você foi contratado para desenvolver o frontend da plataforma que fornecerá toda a inteligência ao dispositivo. Esta plataforma é baseada em serviços, de forma a flexibilizar a integração. Para esse trabalho, considere que os seguintes serviços REST estarão disponíveis:
Serviço para cadastrar pontos de interesse, com 3 atributos: Nome do POI, coordenada X (inteiro não negativo) e coordenada Y (inteiro não negativo). Os POIs devem ser armazenados em uma base de dados.
Serviço para listar todos os POIs cadastrados.
Serviço para listar POIs por proximidade. Este serviço receberá uma coordenada X e uma coordenada Y, especificando um ponto de referência, bem como uma distância máxima (d-max) em metros. O serviço deverá retornar todos os POIs da base de dados que estejam a uma distância menor ou igual a d-max a partir do ponto de referência. Exemplo:

Base de Dados:

'Lanchonete' (x=27, y=12)
'Posto' (x=31, y=18)
'Joalheria' (x=15, y=12)
'Floricultura' (x=19, y=21)
'Pub' (x=12, y=8)
'Supermercado' (x=23, y=6)
'Churrascaria' (x=28, y=2)

Dado o ponto de referência (x=20, y=10) indicado pelo receptor GPS, e uma distância máxima de 10 metros, o serviço irá retornar os seguintes POIs:

 Lanchonete
 Joalheria
 Pub
 Supermercado

## Instruções para testes

- Selecionar a opção desejada no botão drop-down (botão azul).
- Para cadastrar um ponto, selecionar no botão drop-down a opção "Cadastrar novo ponto", preencher os campos e clicar no botão "Cadastrar" (botão verde).

