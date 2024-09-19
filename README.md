# Painel de Senhas - Sistema de Atendimento

## Descrição

Este projeto é um sistema de gerenciamento de filas para clínicas, desenvolvido em HTML, CSS e JavaScript. O sistema inclui um painel de senha para os pacientes entrarem na fila, uma interface para a recepcionista chamar pacientes e um painel de TV que exibe as informações de atendimento atual e a lista de pacientes chamados.

## Estrutura do Projeto

- `FrontEnd/`
  - `fila/` - Tela onde o paciente entra na fila.
  - `Chamada/` - Tela onde a recepcionista chama os pacientes.
  - `Paniel_Tv/` - Tela do painel de TV que exibe as informações de atendimento.

## Funcionalidades

- **Tela de Entrada na Fila:** Permite ao paciente entrar na fila, especificar o tipo de atendimento (Convencional ou Prioridade) e visualizar o número de pacientes à sua frente.
- **Tela de Chamada de Pacientes:** Permite à recepcionista chamar o próximo paciente, selecionar o guichê e visualizar a lista de pacientes na fila.
- **Painel de TV:** Exibe o atendimento atual, incluindo o nome do paciente, o guichê e o tipo de atendimento. Mostra também a lista de pacientes já chamados e a hora atual.

## Tecnologias Usadas

- HTML
- CSS
- JavaScript
- Local Storage (para armazenamento dos dados da fila e do atendimento atual)

## Instruções de Instalação

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_REPOSITORIO>
