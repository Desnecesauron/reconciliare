// Traduções em Português

export default {
  // Navegação
  nav: {
    myConfessions: 'Minhas Confissões',
    examConscience: 'Exame de Consciência',
    mySins: 'Meus Pecados',
    prayers: 'Orações',
    preparation: 'Preparação',
    settings: 'Configurações',
    contribute: 'Contribuir',
    help: 'Ajuda',
    about: 'Sobre',
    logout: 'Sair',
  },

  // Comum
  common: {
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Salvar',
    ok: 'OK',
    success: 'Sucesso',
    error: 'Erro',
    warning: 'Atenção',
    back: 'Voltar',
    next: 'Próximo',
    remove: 'Remover',
    update: 'Atualizar',
    user: 'Usuário',
    yes: 'Sim',
    no: 'Não',
    source: 'Fonte',
  },

  // Auth - Cadastro
  auth: {
    register: 'CADASTRO',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    themes: 'Temas:',
    languages: 'Idiomas:',
    createPin: 'Crie seu PIN de segurança',
    pinDescription: 'Este PIN será usado para proteger seus dados',
    enterPin: 'Digite o PIN:',
    confirmPin: 'Confirme o PIN:',
    registerButton: 'CADASTRAR',
    nextButton: 'PRÓXIMO',
    backButton: 'VOLTAR',
    // Erros de cadastro
    errorEmptyName: 'Por favor, insira seu nome.',
    errorPinLength: 'O PIN deve ter 4 dígitos.',
    errorPinMatch: 'Os PINs não coincidem.',
    errorRegister: 'Ocorreu um erro ao criar sua conta.',
    // Login
    pin: 'PIN',
    pinPlaceholder: '••••',
    login: 'ENTRAR',
    forgotPin: 'ESQUECI A SENHA',
    incorrectPin: 'PIN incorreto',
    errorOccurred: 'Ocorreu um erro',
    forgotPinTitle: 'Esqueceu a senha?',
    forgotPinMessage: 'Para redefinir seu PIN, todos os seus dados serão apagados. Deseja continuar?',
    reset: 'Redefinir',
    resetSuccess: 'Seus dados foram apagados. Você pode criar uma nova conta.',
    // Importar backup no cadastro
    haveBackup: 'Já tem um backup?',
    restoreBackup: 'Restaurar Backup',
    restoreSuccess: 'Dados restaurados com sucesso!',
  },

  // Dashboard
  dashboard: {
    lastConfession: 'ÚLTIMA CONFISSÃO',
    myHistory: 'MEU HISTÓRICO',
    nextConfession: 'PRÓXIMA CONFISSÃO',
    daysWithout: 'ESTOU %{count} DIA',
    daysWithoutPlural: 'ESTOU %{count} DIAS',
    withoutConfessing: 'SEM CONFESSAR',
  },

  // Histórico
  history: {
    title: 'Meu Histórico',
    empty: 'Nenhuma confissão registrada ainda',
    sinForgiven: 'pecado perdoado',
    sinsForgiven: 'pecados perdoados',
  },

  // Exame de Consciência
  exam: {
    title: 'Exame de Consciência',
  },

  // Meus Pecados
  sins: {
    title: 'Meus Pecados',
    empty: 'Sem pecados registrados',
    addSin: 'Pecado',
    describeSin: 'Descreva o pecado:',
    inputPlaceholder: 'Digite aqui...',
    removeSin: 'Remover pecado',
    removeSinMessage: 'Deseja remover este pecado da lista?',
    reconciliare: 'RECONCILIARE',
    confessionTitle: 'Reconciliare',
    confessionMessage: 'Você já se confessou e recebeu a absolvição? Esta ação limpará sua lista de pecados e registrará a confissão.',
    confessionConfirm: 'Sim, me confessei',
    successTitle: 'Parabéns!',
    successMessage: 'Sua confissão foi registrada. Que Deus abençoe você!',
    warningTitle: 'Atenção',
    warningMessage: 'Não há pecados para confessar.',
  },

  // Modal de Data
  datePicker: {
    title: 'Próxima Confissão',
    subtitle: 'Quando você pretende se confessar novamente?',
    addToCalendar: 'Adicionar lembrete ao calendário',
  },

  // Configurações
  settings: {
    title: 'Configurações',
    name: 'Nome',
    namePlaceholder: 'Seu nome',
    password: 'Senha',
    currentPassword: 'Senha atual',
    newPassword: 'Nova Senha',
    newPasswordPlaceholder: 'Nova senha (4 dígitos)',
    themes: 'Temas:',
    languages: 'Idiomas:',
    update: 'ATUALIZAR',
    pinUpdated: 'PIN atualizado com sucesso!',
    saved: 'Configurações salvas!',
    // Backup
    backup: 'Backup',
    exportData: 'Exportar Dados',
    importData: 'Importar Dados',
    exportDescription: 'Criar backup criptografado dos seus dados',
    importDescription: 'Restaurar dados de um backup anterior',
    exportSuccess: 'Backup exportado com sucesso!',
    importSuccess: 'Dados restaurados com sucesso! Reinicie o app para aplicar as alterações.',
    importSuccessRestart: 'Dados restaurados com sucesso! O aplicativo será reiniciado para aplicar as alterações.',
    importErrorFormat: 'Arquivo de backup inválido. Verifique se selecionou o arquivo correto.',
    importErrorPassword: 'PIN incorreto. Use o mesmo PIN usado para criar o backup.',
    importErrorExtension: 'Arquivo inválido. Selecione um arquivo .rcl gerado pelo Reconciliare.',
    importErrorUnknown: 'Erro ao importar backup. Tente novamente.',
    enterPinToExport: 'Digite seu PIN para criar o backup:',
    enterPinToImport: 'Digite o PIN usado para criar este backup:',
    selectBackupFile: 'Selecione o arquivo de backup',
    noFileSelected: 'Nenhum arquivo selecionado',
  },

  // Contribuir
  contribute: {
    title: 'Contribuir',
    text1: 'Muito obrigado por usar o app RECONCILIARE! Esperamos que isto possa ajudar nas suas confissões.',
    text2: 'Se você deseja contribuir com alguma doação para ajudar a manter este projeto, clique no botão abaixo.',
    text3: 'Sua contribuição ajuda a manter o aplicativo gratuito e disponível para todos os católicos que desejam viver uma vida de oração e reconciliação com Deus.',
    donateButton: 'QUERO FAZER UMA DOAÇÃO',
    thankYou: 'Que Deus abençoe você e sua família!',
  },

  // Ajuda
  help: {
    title: 'Ajuda',
    firstAccess: 'PRIMEIRO ACESSO',
    firstAccessText: 'Para se cadastrar no app é fácil, basta inserir o seu nome e foto. Posteriormente insira o seu PIN para garantir que nenhuma outra pessoa que pegar o seu celular verá o seu exame de consciência. Você também pode personalizar o app escolhendo o seu idioma e o tema que você mais gosta.',
    homeScreen: 'TELA INICIAL',
    homeScreenText: 'Esta tela é o seu dashboard, onde você poderá visualizar o seu histórico de confissões, quantos dias está sem confessar, qual é a da data da sua última confissão e quando será a próxima.',
    examConscience: 'EXAME DE CONSCIÊNCIA',
    examConscienceText: 'Antes da sua confissão, leia atentamente cada pecado e assinale qual deles você cometeu. Desta forma cada pecado será transferido automaticamente para a sua lista de pecados, onde mostrará um resumo geral com todos os seus pecados para que você possa confessá-los ao sacerdote. Após a sua confissão, lembre-se de clicar no botão RECONCILIARE, pronto! Assim como você, o seu app estará limpo e com todos os pecados apagados.',
    prayersPreparation: 'ORAÇÕES E PREPARAÇÃO',
    prayersPreparationText: 'Nessas sessões você poderá recitar algumas orações ou meditar sobre o sacramento da reconciliação e a sua importância.',
    pin: 'PIN',
    pinText: 'O PIN é um código pessoal com 4 números que serve para proteger a sua privacidade. Caso você esqueça o seu PIN, você poderá resetá-lo, porém todos os pecados que estiverem na sua lista de pecados e no exame de consciência serão apagados.',
    settings: 'CONFIGURAÇÕES',
    settingsText: 'Caso você deseje alterar a cor do tema, a sua foto ou o seu PIN, acesse o menu Configurações e deixe o app como você quiser.',
  },

  // Sobre
  about: {
    title: 'Sobre',
    text1: 'RECONCILIARE vem do latim e significa "reconciliar", "restabelecer a paz", "voltar à amizade". É exatamente isso que o sacramento da Reconciliação nos proporciona: a oportunidade de nos reconciliarmos com Deus e com a Igreja.',
    text2: 'Jesus, com a sua infinita bondade, instituiu o sacramento da reconciliação nos presenteando com a Sua Misericórdia Divina. Por meio deste sacramento, podemos receber o perdão dos nossos pecados e a graça de recomeçar.',
    text3: 'O aplicativo RECONCILIARE foi desenvolvido para ajudar todos os católicos a elaborarem o seu exame de consciência antes da confissão. Ele foi projetado para ser simples e fácil de ser usado, ajudando você a lembrar seus pecados de modo a fazer uma boa confissão.',
    text4: 'Que Deus abençoe você e sua família!',
    version: 'Versão',
  },

  // Artigo não encontrado
  article: {
    notFound: 'Artigo não encontrado',
  },

  // Calendário
  calendar: {
    eventTitle: 'Confissão - Reconciliare',
    eventNotes: 'Lembrete para se confessar. Que Deus abençoe você!',
  },

  // Orações
  prayers: {
    actOfContrition: {
      title: 'Ato de Contrição',
      content: 'Meu Deus, porque sois infinitamente bom e Vos amo de todo o meu coração, pesa-me de Vos ter ofendido; e, com o auxílio da Vossa divina graça, proponho firmemente emendar-me e nunca mais Vos tornar a ofender. Peço e espero o perdão das minhas culpas pela Vossa infinita misericórdia. Amém.',
    },
    actOfContritionAlt: {
      title: 'Ato de Contrição (Alternativo)',
      content: 'Senhor meu Jesus Cristo, Deus e Homem verdadeiro, Criador e Redentor meu, por serdes Vós quem sois, sumamente bom, e porque Vos amo sobre todas as coisas, me pesa de todo o coração de Vos ter ofendido; e proponho firmemente nunca mais pecar, confessar-me e cumprir a penitência que me for imposta. Ofereço-Vos a minha vida, obras e trabalhos, em satisfação de todos os meus pecados. E confio na Vossa bondade e misericórdia infinita, que mos perdoareis pelos merecimentos do Vosso preciosíssimo Sangue, Paixão e Morte, e me dareis graça para me emendar e perseverar no Vosso santo serviço até o fim da minha vida. Amém.',
    },
    beforeConfession: {
      title: 'Oração Antes da Confissão',
      content: 'Senhor, meu Deus, dai-me luz para conhecer todos os meus pecados e graça para deles me arrepender sinceramente. Concedei-me humildade para os confessar sem orgulho e sem medo. Fazei com que eu me aproxime deste sacramento com fé, esperança e amor. Que o Vosso Espírito Santo ilumine minha mente e toque meu coração, para que eu faça uma boa confissão e receba dignamente o Vosso perdão. Por Cristo, nosso Senhor. Amém.',
    },
    afterConfession: {
      title: 'Oração Após a Confissão',
      content: 'Senhor Jesus Cristo, eu Vos agradeço pelo dom da Vossa misericórdia que acabo de receber no sacramento da Reconciliação. Agradeço-Vos por terdes perdoado os meus pecados e por me terdes devolvido a Vossa amizade. Ajudai-me a permanecer fiel às promessas que fiz. Fortalecei-me com a Vossa graça para que eu não volte a cair nas mesmas faltas. Que a alegria do Vosso perdão me acompanhe sempre e me ajude a perdoar os outros como Vós me perdoastes. Amém.',
    },
    ourFather: {
      title: 'Pai Nosso',
      content: 'Pai nosso que estais nos Céus, santificado seja o Vosso Nome, venha a nós o Vosso Reino, seja feita a Vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do Mal. Amém.',
    },
    hailMary: {
      title: 'Ave Maria',
      content: 'Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
    },
    glory: {
      title: 'Glória ao Pai',
      content: 'Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.',
    },
    hailHolyQueen: {
      title: 'Salve Rainha',
      content: 'Salve, Rainha, Mãe de misericórdia, vida, doçura, esperança nossa, salve! A Vós bradamos, os degredados filhos de Eva. A Vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses Vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do Vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.',
    },
    creed: {
      title: 'Creio em Deus Pai',
      content: 'Creio em Deus Pai, Todo-Poderoso, Criador do Céu e da terra. E em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria. Padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado. Desceu à mansão dos mortos, ressuscitou ao terceiro dia. Subiu aos Céus, está sentado à direita de Deus Pai Todo-Poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.',
    },
    saintMichael: {
      title: 'Oração a São Miguel Arcanjo',
      content: 'São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra a maldade e as ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, Príncipe da milícia celeste, pelo poder divino, precipitai no inferno a satanás e aos outros espíritos malignos, que andam pelo mundo para perder as almas. Amém.',
    },
    comeHolySpirit: {
      title: 'Vinde, Espírito Santo',
      content: `Vinde, Espírito Santo, enchei os corações dos Vossos fiéis e acendei neles o fogo do Vosso amor. Enviai o Vosso Espírito e tudo será criado. E renovareis a face da terra.

Oremos: Ó Deus, que instruístes os corações dos Vossos fiéis com a luz do Espírito Santo, fazei que apreciemos retamente todas as coisas segundo o mesmo Espírito e gozemos sempre da Sua consolação. Por Cristo, Senhor nosso. Amém.`,
    },
    angelus: {
      title: 'Angelus',
      content: `V. O Anjo do Senhor anunciou a Maria.
R. E ela concebeu do Espírito Santo.

Ave Maria...

V. Eis aqui a serva do Senhor.
R. Faça-se em mim segundo a Vossa palavra.

Ave Maria...

V. E o Verbo se fez carne.
R. E habitou entre nós.

Ave Maria...

V. Rogai por nós, Santa Mãe de Deus.
R. Para que sejamos dignos das promessas de Cristo.

Oremos: Infundi, Senhor, a Vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Jesus Cristo, Vosso Filho, pela Sua Paixão e Cruz sejamos levados à glória da ressurreição. Por Cristo, nosso Senhor. Amém.`,
    },
  },

  // Exame de Consciência - Categorias
  examCategories: {
    firstCommandment: {
      name: 'Primeiro Mandamento: Amar a Deus sobre todas as coisas',
      sins: [
        { id: 'p1-1', description: 'Descuidei o conhecimento da minha fé, tal como o Catecismo a ensina, tal como o Credo dos apóstolos, os Dez Mandamentos, os Sete Sacramentos, o Pai Nosso, etc.?' },
        { id: 'p1-2', description: 'Não coloquei Deus em primeiro lugar na minha vida?' },
        { id: 'p1-3', description: 'Alguma vez duvidei conscientemente de algum ensinamento da Igreja ou o neguei?' },
        { id: 'p1-4', description: 'Duvidei da existência de Deus?' },
        { id: 'p1-5', description: 'Tive medo de Satanás mais do que confiança em Deus?' },
        { id: 'p1-6', description: 'Tomei parte em um ato de culto não católico?' },
        { id: 'p1-7', description: 'Sou membro de alguma organização religiosa não católica, de alguma sociedade secreta ou de um grupo anticatólico?' },
        { id: 'p1-8', description: 'Alguma vez li ou ouvi, com consciência do que fazia, alguma literatura herética, blasfema ou anticatólica, assim colocando em risco minha fé?' },
        { id: 'p1-9', description: 'Pratiquei alguma superstição (como figas, tarô, horóscopo, benzedeira, etc.)?' },
        { id: 'p1-10', description: 'Participei de algum ato de feitiçaria, umbanda, candomblé, ocultismo, cartomancia, pacto demoníaco ou bruxaria?' },
        { id: 'p1-11', description: 'Omiti algum dever ou prática religiosa por respeito humano?' },
        { id: 'p1-12', description: 'Deixei de falar com Deus diariamente?' },
        { id: 'p1-13', description: 'Deixei de ler e viver a Palavra de Deus?' },
        { id: 'p1-14', description: 'Deixei de rezar fielmente as minhas orações diárias?' },
        { id: 'p1-15', description: 'Abusei os Sacramentos de alguma maneira?' },
        { id: 'p1-16', description: 'Zombei de Deus, de Nossa Senhora, dos Santos, da Igreja, dos Sacramentos ou de quaisquer coisas santas?' },
        { id: 'p1-17', description: 'Fui culpável de grande irreverência na igreja (conversas, desatenção, má conduta, modo como estava vestido)?' },
        { id: 'p1-18', description: 'Fui indiferente quanto à minha fé Católica - acreditando que uma pessoa pode salvar-se em qualquer religião, ou que todas as religiões são iguais?' },
        { id: 'p1-19', description: 'Presumi em qualquer situação que tinha garantida a misericórdia de Deus?' },
        { id: 'p1-20', description: 'Desacreditei da misericórdia de Deus?' },
        { id: 'p1-21', description: 'Odiei ou detestei a Deus?' },
        { id: 'p1-22', description: 'Abandonei minha fé ou tive vergonha dela?' },
        { id: 'p1-23', description: 'Idolatrei ou dei mais importância a alguma pessoa, atividade ou objeto do que a Deus?' },
        { id: 'p1-24', description: 'Não tive fé em Deus, blasfemei ou me revoltei contra Ele nos momentos de dificuldade e sofrimento?' },
        { id: 'p1-25', description: 'Blasfemei contra a Santíssima Trindade?' },
        { id: 'p1-26', description: 'Recebi a Sagrada Comunhão em estado de pecado mortal?' },
        { id: 'p1-27', description: 'Comportei-me mal na Igreja (conversando, distraindo-me na Missa, indo mal vestido, etc)?' },
        { id: 'p1-28', description: 'Não fui solidário com os pobres?' },
        { id: 'p1-29', description: 'Deixei de ajudar os necessitados?' },
        { id: 'p1-30', description: 'Fui racista?' },
        { id: 'p1-31', description: 'Guardei mágoa e rancor?' },
        { id: 'p1-32', description: 'Fui egoísta?' },
        { id: 'p1-33', description: 'Deixei de ver Deus no meu próximo?' },
        { id: 'p1-34', description: 'Deixei de promover o bem do meu semelhante?' },
        { id: 'p1-35', description: 'Fui omisso/desinteressado na defesa da justiça e da verdade?' },
      ],
    },
    secondCommandment: {
      name: 'Segundo Mandamento: Não tomar o Nome de Deus em vão',
      sins: [
        { id: 'p2-1', description: 'Jurei pelo Nome de Deus desnecessariamente ou sem reverência?' },
        { id: 'p2-2', description: 'Através de palavras ou ações, murmurei ou queixei-me contra Deus?' },
        { id: 'p2-3', description: 'Disse palavras injuriosas contra a Virgem Maria ou os Santos?' },
        { id: 'p2-4', description: 'Amaldiçoei-me ou a alguém ou a alguma criatura? (rogar praga)' },
        { id: 'p2-5', description: 'Provoquei alguém à ira, pecar, praguejar, blasfemar ou a ofender a Deus?' },
        { id: 'p2-6', description: 'Quebrei uma promessa feita a Deus?' },
        { id: 'p2-7', description: 'Usei o nome de Deus em vão ou com raiva?' },
      ],
    },
    thirdCommandment: {
      name: 'Terceiro Mandamento: Santificar os Domingos e Festas de Guarda',
      sins: [
        { id: 'p3-1', description: 'Deixei de participar da Santa Missa no Domingo ou Festa de Guarda/preceito da Igreja?' },
        { id: 'p3-2', description: 'Cheguei atrasado ou saí antes do fim da Missa sem motivo grave?' },
        { id: 'p3-3', description: 'Fui a missa somente quando me deu vontade?' },
        { id: 'p3-4', description: 'Fiz com que outras pessoas faltassem à Missa? nos Domingos e Dias Santos de preceito, ou saíssem mais cedo ou chegasse atrasados à Missa?' },
        { id: 'p3-5', description: 'Estive desatento propositadamente durante a Missa?' },
        { id: 'p3-6', description: 'Brinquei ou faltei com o respeito na igreja?' },
        { id: 'p3-7', description: 'Deixei de pagar o dízimo?' },
        { id: 'p3-8', description: 'Deixei de participar das atividades da paróquia?' },
        { id: 'p3-9', description: 'Não procurei dar testemunho de vida cristã?' },
        { id: 'p3-10', description: 'Não demonstrei interesse pelas coisas da Igreja católica?' },
        { id: 'p3-11', description: 'Deixei de me confessar com frequência?' },
        { id: 'p3-12', description: 'Confessei-me sem o firme propósito de corrigir-me' },
        { id: 'p3-13', description: 'Faltei ao jejum e abstinência de carne no dia prescrito?' },
        { id: 'p3-14', description: 'Trabalhei ou fiz alguém trabalhar no Domingo ou Festa de preceito sem necessidade?' },
        { id: 'p3-15', description: 'Comprei ou vendi coisas sem necessidade aos Domingos e Dias Santos de preceito?' },
      ],
    },
    fourthCommandment: {
      name: 'Quarto Mandamento: Honrar pai e mãe',
      sins: [
        { id: 'p4-1', description: 'Desobedeci aos meus pais, faltei-lhes ao respeito, descuidei-me em ajudá-los nas suas necessidades ou recusei-me a fazê-lo?' },
        { id: 'p4-2', description: 'Mostrei irreverência/desrespeito em relação a pessoas em posições de autoridade?' },
        { id: 'p4-3', description: 'Desobedeci às autoridades legítimas?' },
        { id: 'p4-4', description: 'Insultei ou disse mal de sacerdotes ou de outras pessoas consagradas a Deus?' },
        { id: 'p4-5', description: 'Tive menos reverência para com pessoas de idade?' },
        { id: 'p4-6', description: 'Tratei mal o cônjuge ou os meus filhos?' },
        { id: 'p4-7', description: 'Coloquei o cônjuge em segundo plano?' },
        { id: 'p4-8', description: 'Fui desobediente ou desrespeitoso com meu cônjuge?' },
        { id: 'p4-9', description: 'Descuidei das necessidades da minha família? (materiais, presença, etc)' },
        { id: 'p4-10', description: 'Não tratei de batizar cedo os meus filhos?' },
        { id: 'p4-11', description: 'Deixei de ensinar a fé católica e a prática religiosa aos meus filhos?' },
        { id: 'p4-12', description: 'Permiti que meus filhos descuidasse dos seus deveres religiosos?' },
        { id: 'p4-13', description: 'Consenti que meus filhos namorassem sem haver objetivo claro de encaminhar o relacionamento até o casamento?' },
        { id: 'p4-14', description: 'Consenti que meus filhos tivessem relação sexual fora do matrimônio?' },
        { id: 'p4-15', description: 'Permiti que meus filhos vissem pornografia ou conteúdos imorais?' },
        { id: 'p4-16', description: 'Deixei de vigiar as companhias com quem meus filhos andam?' },
        { id: 'p4-17', description: 'Abandonei minhas responsabilidades de pai/mãe?' },
        { id: 'p4-18', description: 'Deixei de disciplinar os meus filhos quando eles necessitassem de correção?' },
        { id: 'p4-19', description: 'Dei mau exemplo aos meus filhos?' },
        { id: 'p4-20', description: 'Escandalizei os meus filhos ao discutir com o meu cônjuge na frente deles?' },
        { id: 'p4-21', description: 'Escandalizei os meus filhos ao dizer palavrões e obscenidades na frente deles?' },
        { id: 'p4-22', description: 'Não guardei a modéstia na minha casa?' },
        { id: 'p4-23', description: 'Fui grosseiro(a) em casa?' },
        { id: 'p4-24', description: 'Briguei ou discuti frequentemente?' },
        { id: 'p4-25', description: 'Fui impaciente e/ou autoritário?' },
        { id: 'p4-26', description: 'Faltei com o diálogo e o amor em casa?' },
        { id: 'p4-27', description: 'Deixei de rezar em família?' },
        { id: 'p4-28', description: 'Permiti que meus filhos usassem roupa imodesta (mini-saias; calças justas; vestidos ou camisolas justas; blusas transparentes; calções muito curtos; roupas de banho reveladoras; etc.)?' },
        { id: 'p4-29', description: 'Neguei aos meus filhos a liberdade de casar ou seguir uma vocação religiosa?' },
        { id: 'p4-30', description: 'Não perdoei os meus familiares pelas ofensas?' },
        { id: 'p4-31', description: 'Tive vergonha dos meus familiares?' },
        { id: 'p4-32', description: 'Causei tristeza aos meus familiares?' },
        { id: 'p4-33', description: 'Atrapalhei a harmonia familiar?' },
        { id: 'p4-34', description: 'Fiz bagunça e atrapalhei as aulas na escola?' },
        { id: 'p4-35', description: 'Fui negligente na escola ou no trabalho?' },
        { id: 'p4-36', description: 'Fui irresponsável no estudo e deveres da escola?' },
        { id: 'p4-37', description: 'Desrespeitei aos professores e colegas?' },
        { id: 'p4-38', description: 'Cometi algum tipo de agressão contra algum membro da família?' },
      ],
    },
    fifthCommandment: {
      name: 'Quinto Mandamento: Não matarás',
      sins: [
        { id: 'p5-1', description: 'Não me aceito como sou?' },
        { id: 'p5-2', description: 'Procurei ou desejei acabar com minha vida?' },
        { id: 'p5-3', description: 'Desejei ou apressei a morte ou o ferimento de alguém?' },
        { id: 'p5-4', description: 'Alimentei o ódio para com alguém?' },
        { id: 'p5-5', description: 'Oprimi alguém?' },
        { id: 'p5-6', description: 'Desejei vingar-me?' },
        { id: 'p5-7', description: 'Provoquei desconfiança ou discórdia entre outras pessoas?' },
        { id: 'p5-8', description: 'Discuti ou lutei com alguém?' },
        { id: 'p5-9', description: 'Desejei mal a alguém?' },
        { id: 'p5-10', description: 'Quis ferir ou maltratar alguém?' },
        { id: 'p5-11', description: 'Recuso-me a falar com alguém, ou guardo ressentimento de alguém?' },
        { id: 'p5-12', description: 'Me alegrei com a desgraça alheia?' },
        { id: 'p5-13', description: 'Tive ciúmes ou inveja de alguém?' },
        { id: 'p5-14', description: 'Fiz, tentei ou aconselhei alguém a fazer um aborto?' },
        { id: 'p5-15', description: 'Mutilei o meu corpo desnecessariamente?' },
        { id: 'p5-16', description: 'Consenti pensamentos de suicídio ou atentei contra minha vida?' },
        { id: 'p5-17', description: 'Embriaguei-me ou usei drogas ilícitas?' },
        { id: 'p5-18', description: 'Comi em excesso, cometendo o pecado da gula?' },
        { id: 'p5-19', description: 'Maltratei, feri ou matei algum animal ou criatura de Deus sem necessidade?' },
        { id: 'p5-20', description: 'Desperdicei sem necessidade recursos naturais (água) ou comida?' },
        { id: 'p5-21', description: 'Deixei de comer o suficiente por descuido da saúde?' },
        { id: 'p5-22', description: 'Deixei de dedicar tempo ao descanso e lazer?' },
        { id: 'p5-23', description: 'Trabalhei demais prejudicando a saúde?' },
        { id: 'p5-24', description: 'Tomei remédios sem necessidade ou de forma abusiva?' },
        { id: 'p5-25', description: 'Deixei de corrigir alguém de maneira fraterna e caridosa?' },
        { id: 'p5-26', description: 'Causei danos à alma de alguém, especialmente crianças, dando maus exemplos?' },
        { id: 'p5-27', description: 'Fiz mal à minha alma, expondo-a a intencionalmente e sem necessidade a tentações?' },
        { id: 'p5-28', description: 'Fiz mal ao meu corpo, colocando-o em risco e não cuidando dele que é templo do Espírito Santo?' },
        { id: 'p5-29', description: 'Arrisquei minha vida sem necessidade?' },
        { id: 'p5-30', description: 'Não evitei a preguiça e a ociosidade?' },
        { id: 'p5-31', description: 'Fui imprudente, dirigindo em alta velocidade ou sob efeito de álcool/drogas ou usei o celular enquanto dirigia?' },
        { id: 'p5-32', description: 'Desrespeitei as leis de trânsito, colocando a vida das pessoas em risco?' },
        { id: 'p5-33', description: 'Neguei-me a respeitar a natureza e o meio ambiente?' },
      ],
    },
    sixthNinthCommandment: {
      name: 'Sexto e Nono Mandamentos: Não pecar contra a castidade / Não cobiçar a mulher do próximo',
      sins: [
        { id: 'p6-1', description: 'Neguei ao meu cônjuge ter relações sexuais sem motivo justo?' },
        { id: 'p6-2', description: 'Pratiquei controle de natalidade de maneira artificial (preservativo, pílulas, DIU, vasectomia, laqueadura)?' },
        { id: 'p6-3', description: 'Abusei dos meus direitos matrimoniais de algum outro modo?' },
        { id: 'p6-4', description: 'Cometi adultério no meu matrimônio (em pensamentos, olhares, palavras ou atos)?' },
        { id: 'p6-5', description: 'Pratiquei atos sexuais antinaturais (sexo anal)?' },
        { id: 'p6-6', description: 'Pratiquei pedofilia?' },
        { id: 'p6-7', description: 'Pratiquei relação sexual fora do matrimônio (fornicação)?' },
        { id: 'p6-8', description: 'Cometi o pecado da fornicação com a minha namorada(o) fora do matrimônio?' },
        { id: 'p6-9', description: 'Cometi algum pecado impuro contra a natureza (homossexualidade ou lesbianismo, etc.)?' },
        { id: 'p6-10', description: 'Provoquei escândalos?' },
        { id: 'p6-11', description: 'Participei de orgias?' },
        { id: 'p6-12', description: 'Participei de conversas impuras?' },
        { id: 'p6-13', description: 'Tive relação sexual com prostitutas ou fui a boates noturnas onde acontecem prostituição?' },
        { id: 'p6-14', description: 'Toquei ou abracei outra pessoa com desejo sexual fora do matrimônio?' },
        { id: 'p6-15', description: 'Troquei beijos prolongados no meu namoro ou noivado?' },
        { id: 'p6-16', description: 'Toquei as partes íntimas do meu namorado(a) ou noivo(a)?' },
        { id: 'p6-17', description: 'Pratiquei a troca prolongada de carícias no meu namoro ou noivado?' },
        { id: 'p6-18', description: 'Pequei impuramente contra eu mesmo (masturbação)?' },
        { id: 'p6-19', description: 'Deixei me levar por fantasias sexuais, como vibradores, roupas eróticas ou brinquedos sexuais?' },
        { id: 'p6-20', description: 'Consenti em pensamentos impuros, ou tive prazer neles?' },
        { id: 'p6-21', description: 'Consenti em desejos impuros para com alguém, ou desejei conscientemente ver ou fazer alguma coisa impura?' },
        { id: 'p6-22', description: 'Tratei o meu cônjuge como objeto de prazer sexual?' },
        { id: 'p6-23', description: 'Fui ocasião de pecado para os outros, por usar roupa justa, reveladora ou imodesta?' },
        { id: 'p6-24', description: 'Fiz alguma coisa, deliberadamente ou por descuido, que provocasse pensamentos ou desejos impuros em outra pessoa?' },
        { id: 'p6-25', description: 'Li livros indecentes ou vi figuras obscenas?' },
        { id: 'p6-26', description: 'Vi filmes, programas de TV ou pornografia na internet?' },
        { id: 'p6-27', description: 'Ainda conservo alguma material de pornografia?' },
        { id: 'p6-28', description: 'Usei linguagem indecente ou contei histórias indecentes?' },
        { id: 'p6-29', description: 'Ouvi histórias ou piadas indecentes de boa vontade?' },
        { id: 'p6-30', description: 'Gabei-me dos meus pecados sexuais, ou gostei de recordar pecados antigos?' },
        { id: 'p6-31', description: 'Estive com companhias indecentes?' },
        { id: 'p6-32', description: 'Consenti em olhares impuros, desejando outras pessoas?' },
        { id: 'p6-33', description: 'Deixei de controlar a minha imaginação com pensamentos impuros?' },
        { id: 'p6-34', description: 'Deixei de rezar imediatamente para afastar maus pensamentos e tentações?' },
        { id: 'p6-35', description: 'Não evitei as ocasiões de impureza?' },
        { id: 'p6-36', description: 'Fui a bailes imodestos ou peças de teatro indecentes?' },
        { id: 'p6-37', description: 'Fiquei sozinho(a) sem necessidade na companhia de alguém do sexo oposto, com má intenção?' },
      ],
    },
    seventhTenthCommandment: {
      name: 'Sétimo e Décimo Mandamentos: Não roubar / Não cobiçar as coisas alheias',
      sins: [
        { id: 'p7-1', description: 'Roubei alguma coisa?' },
        { id: 'p7-2', description: 'Danifiquei ou destruí a propriedade de outra pessoa?' },
        { id: 'p7-3', description: 'Deixei estragar por negligência a propriedade de outra pessoa?' },
        { id: 'p7-4', description: 'Fui negligente na guarda do dinheiro ou bens de outra pessoa?' },
        { id: 'p7-5', description: 'Joguei em excesso ou apostei de forma irresponsável?' },
        { id: 'p7-6', description: 'Enganei alguém, descuidei-me ou recusei de pagar minhas dívidas?' },
        { id: 'p7-7', description: 'Adquiri algo que sabia ter sido roubado?' },
        { id: 'p7-8', description: 'Deixei de restituir algo emprestado?' },
        { id: 'p7-9', description: 'Lesei meu patrão, não trabalhando como o esperado ou nas despesas?' },
        { id: 'p7-10', description: 'Fui desonesto com o salário dos meus empregados?' },
        { id: 'p7-11', description: 'Recusei-me a ajudar alguém que precisasse urgentemente de ajuda, ou descuidei-me a fazê-lo?' },
        { id: 'p7-12', description: 'Deixei de restituir o que roubei, ou obtive por fraude?' },
        { id: 'p7-13', description: 'Tive inveja de alguém por ter algo que eu não tenho?' },
        { id: 'p7-14', description: 'Invejei os bens de alguém?' },
        { id: 'p7-15', description: 'Tenho sido avarento?' },
        { id: 'p7-16', description: 'Oprimi, menosprezei ou tive preconceito de alguém por ser mais pobre que eu?' },
        { id: 'p7-17', description: 'Tenho dado demasiada importância aos bens e confortos materiais?' },
        { id: 'p7-18', description: 'Subornei alguém?' },
        { id: 'p7-19', description: 'Fui responsável ou participante de algum ato de corrupção?' },
        { id: 'p7-20', description: 'Fiquei com objetos achados sem procurar o dono? (quando é possível)' },
        { id: 'p7-21', description: 'Fiz trapaça nas relações comerciais?' },
        { id: 'p7-22', description: 'Desviei materiais de empresas públicas ou privadas?' },
        { id: 'p7-23', description: 'Desrespeitei as leis justas do Estado e do município?' },
        { id: 'p7-24', description: 'Cometi fraude ou soneguei impostos?' },
        { id: 'p7-25', description: 'Causei prejuízo a alguém por minha culpa (cheque sem fundo, etc.)?' },
        { id: 'p7-26', description: 'Procurei ter lucros abusivos explorando outras pessoas?' },
      ],
    },
    eighthCommandment: {
      name: 'Oitavo Mandamento: Não levantar falso testemunho',
      sins: [
        { id: 'p8-1', description: 'Menti?' },
        { id: 'p8-2', description: 'Menti a respeito de alguém (calúnia)?' },
        { id: 'p8-3', description: 'As minhas mentiras causaram a alguém danos materiais ou espirituais?' },
        { id: 'p8-4', description: 'Fiz julgamentos preconceituosos a respeito de alguém?' },
        { id: 'p8-5', description: 'Falei mal de alguém (calúniam, difamação ou fofoca)?' },
        { id: 'p8-6', description: 'Revelei os pecados ou defeitos de outra pessoa sem necessidade?' },
        { id: 'p8-7', description: 'Revelei segredos que me foram confiados?' },
        { id: 'p8-8', description: 'Fui culpado de fazer intrigas ou causar inimizades?' },
        { id: 'p8-9', description: 'Dei crédito ou apoio à divulgação de escândalos sobre o meu próximo?' },
        { id: 'p8-10', description: 'Semeei discórdia entre as pessoas por maledicência?' },
        { id: 'p8-11', description: 'Levantei falso testemunho contra o próximo?' },
        { id: 'p8-12', description: 'Jurei falso ou assinei documentos falsos?' },
        { id: 'p8-13', description: 'Sou crítico ou negativo sem necessidade?' },
        { id: 'p8-14', description: 'Falto à caridade nas minhas conversas?' },
        { id: 'p8-15', description: 'Alguma vez fiz com que outros pecassem?' },
        { id: 'p8-16', description: 'Cooperei nos pecados de outros?' },
        { id: 'p8-17', description: 'Deixei de reparar ("consertar") o mal que fiz aos outros?' },
      ],
    },
    capitalSins: {
      name: 'Vícios/Pecados Capitais',
      sins: [
        { id: 'vc-1', description: 'Orgulho: Tenho caído no ativismo?' },
        { id: 'vc-2', description: 'Orgulho: Julguei-me melhor que os outros?' },
        { id: 'vc-3', description: 'Orgulho: Procurei chamar atenção sobre a minha pessoa?' },
        { id: 'vc-4', description: 'Orgulho: Fui hipócrita e fingido?' },
        { id: 'vc-5', description: 'Orgulho: Tive mania de grandeza?' },
        { id: 'vc-6', description: 'Orgulho: Critiquei as pessoas destrutivamente?' },
        { id: 'vc-7', description: 'Orgulho: Menosprezei a doutrina da Igreja Católica?' },
        { id: 'vc-8', description: 'Inveja: Tive inveja dos dons, bens ou fama dos outros?' },
        { id: 'vc-9', description: 'Inveja: Quero ser um servo insubstituível na minha comunidade?' },
        { id: 'vc-10', description: 'Inveja: Deixei de desenvolver os dons que Deus me concedeu?' },
        { id: 'vc-11', description: 'Ira: Fui impaciente?' },
        { id: 'vc-12', description: 'Ira: Fui rancoroso ou vingativo?' },
        { id: 'vc-13', description: 'Ira: Fui agressivo ou nervoso?' },
        { id: 'vc-14', description: 'Avareza: Fui apegado ao dinheiro e às coisas materiais?' },
        { id: 'vc-15', description: 'Avareza: Procurei viver no luxo?' },
        { id: 'vc-16', description: 'Avareza: Deixei de repartir meus bens?' },
        { id: 'vc-17', description: 'Preguiça: Tive preguiça de rezar, trabalhar ou ajudar as pessoas?' },
        { id: 'vc-18', description: 'Preguiça: Sou desinteressado pela construção de um mundo mais justo, fraterno e cristão?' },
        { id: 'vc-19', description: 'Preguiça: Deixei de tomar posição evangélica não denunciando as injustiças, a miséria, a fome, a violência, o preconceito, a discriminação, o erotismo, os sinais de morte, o consumismo?' },
        { id: 'vc-20', description: 'Gula: Excedi ao comer?' },
        { id: 'vc-21', description: 'Gula: Descontrolei-me ao beber?' },
        { id: 'vc-22', description: 'Gula: Cometi excesso ao fumar?' },
        { id: 'vc-23', description: 'Gula: Consumi drogas?' },
      ],
    },
    churchCommandments: {
      name: 'Mandamentos da Igreja e a Santa Missa',
      sins: [
        { id: 'pi-1', description: 'Deixei de participar da Santa Missa nos Domingos e Festas de preceito?' },
        { id: 'pi-2', description: 'Descumpri o jejum ou abstinência nas datas prescritas?' },
        { id: 'pi-3', description: 'Deixei de guardar o jejum eucarístico (1 hora antes da comunhão)?' },
        { id: 'pi-4', description: 'Deixei de confessar pelo menos uma vez no ano?' },
        { id: 'pi-5', description: 'Não recebi a Sagrada Eucaristia pelo menos uma vez por ano?' },
        { id: 'pi-6', description: 'Tendo rendimentos provenientes do meu trabalho, deixei de contribuir com o dízimo ou despesas da paróquia?' },
        { id: 'pi-7', description: 'Não observei as leis da Igreja sobre o Matrimônio, ou seja, quanto ao Matrimônio sem a presença de um sacerdote, ou no caso do matrimônio com um parente próximo ou um não Católico?' },
        { id: 'pi-8', description: 'Recebi a Eucaristia sem preparação/devoção ou espírito de adoração?' },
        { id: 'pi-9', description: 'Fiquei conversando na hora da Santa Missa?' },
        { id: 'pi-10', description: 'Usei celular na hora da Santa Missa sem justificativa?' },
        { id: 'pi-11', description: 'Julguei as pessoas que estavam servindo no altar ou participando da Missa?' },
        { id: 'pi-12', description: 'Falei mal do Sacerdote, da sua postura ou da homilia?' },
        { id: 'pi-13', description: 'Minha postura na Missa tem sido de desleixo, negligência ou preguiça?' },
        { id: 'pi-14', description: 'Tenho dormido na hora da homilia?' },
        { id: 'pi-15', description: 'Tenho mostrado aversão aos ritos que se procede na Santa Missa?' },
        { id: 'pi-16', description: 'Não tenho colaborado na participação de cada rito, nem no silêncio, nem com alegria e nem com fé?' },
        { id: 'pi-17', description: 'Tenho me omitido da participação de algum rito litúrgico quanto a fazer uma leitura, dando desculpas que não sou capaz, que não sei fazer, ou por vergonha?' },
      ],
    },
    blasphemiesMary: {
      name: 'Blasfêmias contra o Coração Imaculado de Maria',
      sins: [
        { id: 'bm-1', description: 'Blasfemei contra a Imaculada Conceição?' },
        { id: 'bm-2', description: 'Blasfemei contra a Virgindade Perpétua de Nossa Senhora?' },
        { id: 'bm-3', description: 'Blasfemei contra a Maternidade Divina de Nossa Senhora?' },
        { id: 'bm-4', description: 'Deixei de reconhecer Nossa Senhora como Mãe de todos os homens?' },
        { id: 'bm-5', description: 'Tentei semear nos corações das crianças indiferença, desprezo ou ódio à Nossa Senhora?' },
        { id: 'bm-6', description: 'Menosprezei ou ridiculizei Maria ou os Santos nas Suas santas imagens?' },
      ],
    },
    mercyWorks: {
      name: 'Obras de Misericórdia Espirituais e Corporais',
      sins: [
        { id: 'om-1', description: 'Omiti ou deixei de dar bom conselho aos que pecam?' },
        { id: 'om-2', description: 'Deixei de ensinar os ignorantes?' },
        { id: 'om-3', description: 'Deixei de aconselhar os que duvidam da fé?' },
        { id: 'om-4', description: 'Deixei de consolar os tristes?' },
        { id: 'om-5', description: 'Deixei de sofrer/suportar com paciência as fraquezas do meu próximo?' },
        { id: 'om-6', description: 'Deixei de perdoar os meus irmãos por amor a Deus?' },
        { id: 'om-7', description: 'Deixei de rogar pelos vivos e pelos mortos?' },
        { id: 'om-8', description: 'Deixei de dar de comer a quem tem fome?' },
        { id: 'om-9', description: 'Deixei de dar de beber a quem tem sede?' },
        { id: 'om-10', description: 'Deixei de vestir os nus?' },
        { id: 'om-11', description: 'Deixei de visitar os presos?' },
        { id: 'om-12', description: 'Deixei de ajudar ou acolher algum desabrigado?' },
        { id: 'om-13', description: 'Deixei de visitar os doentes?' },
        { id: 'om-14', description: 'Deixei de enterrar os mortos ou de visitar o cemitério ao menos uma vez ao ano?' },
      ],
    },
  },

  // Artigos de Preparação
  articles: {
    whatIsSin: {
      title: 'O que é o Pecado?',
      content: `O conceito de pecado é bastante simples: basicamente, o pecado é um ato de egoísmo exagerado. É preferir a si mesmo, antepor-se a Deus e aos outros, cedendo às paixões desordenadas, que nos colocam no centro da nossa existência, negando nossa natureza, que só se completa quando se abre ao próximo e a Deus.

O pecado é a rejeição a instaurar com Deus e com os outros uma relação de amor. É um "fechar-se às criaturas" e "rejeitar o Criador". Em geral, o pecador só deseja os prazeres proporcionados pelas criaturas, e não necessariamente quer rejeitar o Criador.

Mas, ao deixar-se seduzir pelas satisfações fugazes proporcionadas pelas criaturas, o pecador implicitamente está agindo contra o amor do Criador, pois sente que o prazer terreno não o preenche, mas ainda assim não resiste a ele.

Por isso, o pecado fere o próprio pecador, afastando-o da plenitude oferecida por Deus. E, por isso, o pecado ofende Deus: não porque Deus, como tal, se veja afetado, mas porque nós mesmos, ao pecar, nos diminuímos diante da grandeza que Deus nos oferece.

Para Jesus, o pecado nasce no interior do homem (cf. Mt 15, 10-20). Por isso, é necessária a transformação interior, do coração. Para Jesus, o pecado é uma escravidão: o homem se deixa no poder do maligno, valorizando falsamente as coisas deste mundo, deixando-se levar pelo imediato, pelas satisfações sensíveis, que não saciam nossa sede de amor e de plenitude.

## Que tipos de pecado existem?

**Pecado Original:** É a herança que todos nós recebemos dos nossos primeiros pais, Adão e Eva: eles desconfiaram do amor de Deus Pai e cederam à tentação de deixá-lo fora das suas escolhas pessoais. Como filhos de uma humanidade que perdeu a inocência, todos nós nascemos com a natureza caída de pecadores e precisamos da graça de Deus, mediante o sacramento do Batismo, para purificar nossa alma.

**Pecado Atual ou Pessoal:** É o que cometemos como indivíduos, voluntária e conscientemente. Pode ser cometido de quatro maneiras:
- Com o pensamento
- Com as palavras
- Com os atos
- Com as omissões

E pode ser contra Deus, contra o próximo ou contra nós mesmos.

## Pecado Mortal e Venial

O pecado pessoal pode ser **mortal** ou **venial**:

1. **Pecado Venial (leve):** Aquele que cometemos sem plena consciência ou sem pleno consentimento, mas em matéria leve.
2. **Pecado Mortal (grave):** Envolve três fatores simultâneos: plena consciência, pleno consentimento e matéria grave.

## O que é matéria grave e matéria leve?

A "matéria" é o "fato" pecaminoso em si.

**Matéria grave:** Fere seriamente qualquer um dos 10 mandamentos. Alguns exemplos:
- Negar a existência de Deus
- Ofender Deus ou os pais
- Matar ou ferir gravemente uma pessoa
- Colocar-se em grave risco de morte sem razão justa
- Cometer atos impuros
- Roubar objetos de valor
- Caluniar
- Cometer graves omissões no cumprimento do dever
- Causar escândalo ao próximo

**Matéria leve:** Não fere seriamente nenhum dos 10 mandamentos, ainda que consista em um ato contrário a alguns deles.`,
      source: 'Aleteia',
    },
    mortalSins: {
      title: 'Pecados Mortais',
      content: `Quando cometemos um pecado grave expulsamos a Deus de nós e perdemos a graça santificante. Por isso o pecado é a desgraça maior que existe no mundo.

Pecar gravemente é:
- Atuar contra a vontade de Deus
- Atentar contra sua glória
- Ofender ao que é infinitamente bom
- Privar-se da graça de Deus
- Submeter-se à escravidão do Diabo
- Converter-se em candidato ao Inferno

## Definição

**Pecado mortal** é pensar, desejar, dizer, fazer, ou omitir algo contra a lei de Deus em matéria grave, sabendo-o e querendo-o.

São necessários três elementos:
1. **Matéria grave**
2. **Conhecimento** (saber que é pecado)
3. **Liberalidade** (querer fazê-lo)

## Exemplos de matéria grave

- Não crer algo ensinado por Deus e a Igreja, ou cultuar outros deuses *(contra o 1º mandamento)*
- Blasfemar o Santo nome de Deus, da Virgem e dos Santos *(contra o 2º mandamento)*
- Faltar à Missa dos Domingos e Festa de guarda, sem grave motivo *(contra o 3º mandamento)*
- Matar, suicidar-se, abortar: "crime abominável" *(Concílio Vaticano II)*
- Consentir em maus pensamentos, desejos, olhares, conversas, ações contra a pureza, contra a fidelidade, contra a transmissão da vida
- Roubar uma quantia importante
- Caluniar ou difamar a uma pessoa em algo grave`,
      source: 'Comunidade Shalom',
    },
    venialSins: {
      title: 'Pecados Veniais',
      content: `Existe outro tipo de pecado: o **pecado venial** ou leve.

Este pecado:
- Não priva a alma da graça de Deus
- Não a condena ao Inferno

Porém, ele:
- Impede a perfeição
- Atrapalha a caminhada da alma para Deus
- Leva ao vício e à escravidão do pecado
- Causa relaxamento da consciência
- Arrefece o amor por Deus
- Pode conduzir a pecados mais graves

## Definição

**Pecado venial** é pensar, desejar, dizer, fazer ou omitir algo contra a lei de Deus em matéria leve.

## Diferença entre Mortal e Venial

| Pecado Mortal | Pecado Venial |
|---------------|---------------|
| Castigo: Inferno eterno | Pena: Purgatório temporário |
| Só se perdoa com confissão (ou ato de contrição perfeita com propósito de confessar) | Perdoa-se pelo arrependimento sincero |

## Como obter perdão do pecado venial

- Arrependimento sincero
- Boa obra
- Oração
- Esmola
- Água benta
- Sinal da cruz
- Confissão`,
      source: 'Comunidade Shalom',
    },
    tenCommandments: {
      title: 'Os Dez Mandamentos',
      content: `Os Dez Mandamentos ou o Decálogo é o nome dado ao conjunto de leis que segundo a Bíblia, teriam sido originalmente escritos por Deus em tábuas de pedra e entregues ao profeta Moisés (as Tábuas da Lei).

## Os Mandamentos

**1º** - Adorar a Deus e amá-lo sobre todas as coisas.

**2º** - Não usar o Santo Nome de Deus em vão.

**3º** - Santificar os Domingos e festas de guarda.

**4º** - Honrar pai e mãe (e os outros legítimos superiores).

**5º** - Não matar (nem causar outro dano, no corpo ou na alma, a si mesmo ou ao próximo).

**6º** - Guardar castidade nas palavras e nas obras.

**7º** - Não furtar (nem injustamente reter ou danificar os bens do próximo).

**8º** - Não levantar falsos testemunhos (nem de qualquer outro modo faltar à verdade ou difamar o próximo).

**9º** - Guardar castidade nos pensamentos e desejos.

**10º** - Não cobiçar as coisas alheias.`,
      source: 'Wiki',
    },
    sinsVsVirtues: {
      title: 'Pecados vs Virtudes',
      content: `A Igreja católica considera que todo ser humano é, em essência, bom. Por isso, para cada um dos 7 pecados capitais, existe uma virtude oposta:

## Os 7 Pecados e suas Virtudes

| Pecado | Virtude |
|--------|---------|
| **Soberba** | Humildade |
| **Avareza** | Generosidade |
| **Luxúria** | Castidade |
| **Inveja** | Caridade |
| **Gula** | Temperança |
| **Ira** | Paciência |
| **Preguiça** | Diligência |

## Reflexão

A prática das virtudes é o caminho para vencer os vícios. Não basta evitar o pecado; é preciso cultivar ativamente a virtude contrária.

Por exemplo:
- Para vencer a **soberba**, pratique atos de **humildade**
- Para vencer a **avareza**, exercite a **generosidade**
- Para vencer a **ira**, cultive a **paciência**`,
      source: '',
    },
    meditation: {
      title: 'Meditação',
      content: `Acredito num Salvador que me ama, que perdoa os meus pecados e que me dá a graça de me tornar santo. Jesus Cristo, através do ministério dos Seus sacerdotes, faz ambas as coisas no Sacramento da Penitência.

## Palavras da Escritura

> "Assim como o Pai Me enviou, também Eu vos envio... Recebei o Espírito Santo. A quem perdoardes os pecados, ser-lhe-ão perdoados; e a quem os retiverdes, ser-lhe-ão retidos."
> — João 20, 21-23

> "Mesmo que os teus pecados sejam como escarlate, ficarão brancos como neve."
> — Isaías 1, 18

> "Não vim chamar os justos, mas os pecadores."
> — Mateus 9, 13

## O Poder do Sacerdote

São João Crisóstomo ensina:

> "Os homens receberam de Deus um poder que não foi dado aos anjos nem aos arcanjos. Nunca foi dito aos espíritos celestes: 'O que ligardes e desligardes na terra será ligado e desligado no céu'. Os príncipes deste mundo só podem ligar e desligar o corpo. O poder do sacerdote vai mais além; alcança a alma, e exerce-se não só em batizar, mas ainda mais em perdoar os pecados."

## Conselhos Práticos

- Não tenha receio de confessar ao sacerdote qualquer pecado impuro que tenha cometido
- Não esconda ou tente disfarçá-lo
- O sacerdote está ali para ajudar e perdoar
- Nada do que possa dizer o escandalizará

**Lembre-se:** Confesse seus pecados com arrependimento sobrenatural, tendo uma resolução firme de não tornar a pecar e de evitar situações que levem ao pecado.`,
      source: 'Fatima.org',
    },
    howToConfess: {
      title: 'Como confessar',
      content: `## Preparação

Antes de mais, **examine bem a sua consciência**.

Em seguida, diga ao sacerdote:
- Que pecados específicos cometeu
- Com a maior exatidão possível, quantas vezes os cometeu desde a sua última boa confissão

## O que confessar

Só é **obrigado** a confessar os pecados mortais, visto que pode obter o perdão dos pecados veniais através de sacrifícios e atos de caridade.

> **Dica:** Se estiver em dúvida sobre se um pecado é mortal ou venial, mencione ao confessor a sua dúvida.

A confissão dos pecados veniais também é recomendada, pois ajuda muito a evitar o pecado e a avançar na direção do Céu.

## Condições para um pecado ser mortal

1. **Matéria séria** - o ato em si é grave
2. **Reflexão suficiente** - saber que é pecado
3. **Pleno consentimento** - escolher fazê-lo livremente

## Avisos importantes

- **Esconder deliberadamente** um pecado mortal invalida a confissão, e é igualmente pecado mortal
- A confissão é **privada** e sujeita ao **Sigilo da Confissão**
- É pecado mortal um sacerdote revelar a quem quer que seja a matéria de uma confissão`,
      source: 'Fatima.org',
    },
    spiritualDirection: {
      title: 'Direção Espiritual',
      content: `Se você tem direção espiritual, já sabe da importância dessa orientação para manter em andamento a vida interior e, em geral, para progredir na vida cristã.

## Por que ter um diretor espiritual?

A Igreja sempre tem recomendado a direção espiritual a todos os que desejam amadurecer seriamente na vida cristã, de forma análoga a:
- Um cardíaco que procura a orientação de um cardiologista
- Um atleta que tem um técnico para prepará-lo e orientá-lo

**Ninguém é bom técnico de si mesmo.**

## Ensinamento de São Josemaría Escrivá

> "Convém que conheças esta doutrina segura: o espírito próprio é mau piloto, para dirigir a alma nas borrascas e tempestades, por entre os escolhos da vida interior. Por isso, é vontade de Deus que a direção da nau esteja entregue a um Mestre, para que, com a sua luz e conhecimento, nos conduza a porto seguro."
> — Caminho, n. 59

## O Bom Pastor

O confessor e, em geral, a pessoa que atende a direção espiritual de outros, participa da missão do Bom Pastor:

- Conhece as suas ovelhas e elas o conhecem
- Vai indicando-lhes o caminho
- Conduz a bons pastos
- Defende dos ladrões e do lobo (cf. Jo 10, 4-14)
- Procura as que se extraviaram para ajudá-las a voltar (cf. Lc 15, 4-7)

## Como escolher um diretor

O bom diretor espiritual deve ser um reflexo de Jesus, o Bom Pastor.

**Importante:** Peça luzes ao Espírito Santo para escolher bem o diretor — sempre com plena liberdade, mas com o desejo sincero de avançar espiritualmente.`,
      source: 'Padre Francisco Faus',
    },
    spiritualAdvice: {
      title: 'Conselhos Espirituais',
      content: `> "Não existem pessoas fortes ou fracas: existem pessoas que oram e pessoas que não oram."

Santo Agostinho disse que quem reza bem, vive bem; quem vive bem, morre bem; e para quem morre bem, tudo está bem.

Santo Afonso ensina: *"Quem ora muito será salvo. Quem ora pouco, coloca a própria salvação eterna em risco."*

## 10 Dicas para crescer na oração

### 1. Tenha convicção e determinação
Ninguém tem sucesso em nenhum âmbito da vida sem determinação. Atletas, músicos, estudiosos não chegaram onde chegaram somente por desejar.

### 2. Contrate o Espírito Santo como professor
São Paulo nos ensina que não sabemos pedir como convém, e que é o Espírito Santo quem intercede por nós. Antes de começar qualquer momento de oração, invoque o Espírito Santo para iluminar sua mente e incendiar seu coração.

### 3. Dedique tempo, espaço, boa vontade e silêncio
Como qualquer arte se aprende com a prática, isso também se aplica à oração. Escolha um momento determinado, um bom lugar, coloque o melhor da sua parte e faça silêncio interior.

### 4. Faça penitência
Se a sua oração se tornou entediante e você não está mais crescendo espiritualmente, pode ser devido ao descuido na vida de penitência. Consulte um bom diretor espiritual e comece com pequenos atos.

### 5. Procure a direção espiritual
Os atletas precisam de treinadores; os estudantes precisam de professores. Os guerreiros da oração precisam de um orientador.

### 6. Faça oração e viva a ação
Uma autêntica vida de oração alcança sua plenitude na progressiva prática das virtudes: fé, esperança, caridade, pureza, bondade, serviço, humildade.

### 7. Estude e leia sobre a oração
Santa Teresa de Ávila não aceitava freiras para o seu convento que não soubessem ler. A santa sabia quão importante é aprender sobre a oração por meio de leitura espiritual sólida.

### 8. Participe de retiros
Os retiros permitem uma dedicação mais prolongada à oração. Um dos estilos mais eficazes são os retiros inacianos.

### 9. Confesse-se regularmente
Às vezes a oração se torna muito difícil porque temos a consciência suja pelo pecado. Jesus disse: *"Bem-aventurados os limpos de coração, porque eles verão Deus"* (Mt 5, 8).

### 10. Conte com Nossa Senhora
Depois de invocar o Espírito Santo, peça a intercessão de Maria por você, e convide-a a estar ao seu lado cada vez que você dedica um tempo à oração. **Ela nunca falha.**`,
      source: 'Aleteia.org',
    },
  },
};
