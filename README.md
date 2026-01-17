# Reconciliare

Aplicativo católico para auxiliar na preparação para o Sacramento da Confissão.

## Funcionalidades

- **Exame de Consciência**: Lista baseada nos 10 Mandamentos para reflexão pessoal
- **Meus Pecados**: Registro pessoal dos pecados a confessar
- **Orações**: Coleção de orações católicas (Pai Nosso, Ave Maria, Ato de Contrição, etc.)
- **Preparação**: Guia de como fazer uma boa confissão
- **Histórico**: Registro das confissões realizadas
- **Temas**: Personalização visual com múltiplos temas de cores
- **Segurança**: Proteção por PIN para privacidade dos dados

## Tecnologias

- React Native com Expo SDK 54
- TypeScript
- React Navigation (Stack + Drawer)
- React Native Reanimated
- AsyncStorage + SecureStore

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar o projeto
npx expo start
```

## Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── contexts/       # Contextos de estado global
├── data/           # Dados estáticos (orações, exame)
├── navigation/     # Configuração de navegação
├── screens/        # Telas do app
├── services/       # Serviços (storage)
└── types/          # Definições TypeScript
```

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
