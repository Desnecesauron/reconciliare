// Traducciones en Español

export default {
  // Navegación
  nav: {
    myConfessions: 'Mis Confesiones',
    examConscience: 'Examen de Conciencia',
    mySins: 'Mis Pecados',
    prayers: 'Oraciones',
    preparation: 'Preparación',
    settings: 'Configuración',
    contribute: 'Contribuir',
    help: 'Ayuda',
    about: 'Acerca de',
    logout: 'Salir',
  },

  // Común
  common: {
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    save: 'Guardar',
    ok: 'OK',
    success: 'Éxito',
    error: 'Error',
    warning: 'Atención',
    back: 'Volver',
    next: 'Siguiente',
    remove: 'Eliminar',
    update: 'Actualizar',
    user: 'Usuario',
    yes: 'Sí',
    no: 'No',
    source: 'Fuente',
  },

  // Auth - Registro
  auth: {
    register: 'REGISTRO',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    themes: 'Temas:',
    languages: 'Idiomas:',
    createPin: 'Crea tu PIN de seguridad',
    pinDescription: 'Este PIN se usará para proteger tus datos',
    enterPin: 'Ingresa el PIN:',
    confirmPin: 'Confirma el PIN:',
    registerButton: 'REGISTRAR',
    nextButton: 'SIGUIENTE',
    backButton: 'VOLVER',
    // Errores de registro
    errorEmptyName: 'Por favor, ingresa tu nombre.',
    errorPinLength: 'El PIN debe tener 4 dígitos.',
    errorPinMatch: 'Los PINs no coinciden.',
    errorRegister: 'Ocurrió un error al crear tu cuenta.',
    // Login
    pin: 'PIN',
    pinPlaceholder: '••••',
    login: 'ENTRAR',
    forgotPin: 'OLVIDÉ MI CONTRASEÑA',
    incorrectPin: 'PIN incorrecto',
    errorOccurred: 'Ocurrió un error',
    forgotPinTitle: '¿Olvidaste tu contraseña?',
    forgotPinMessage: 'Para restablecer tu PIN, todos tus datos serán eliminados. ¿Deseas continuar?',
    reset: 'Restablecer',
    resetSuccess: 'Tus datos han sido eliminados. Puedes crear una nueva cuenta.',
    // Importar backup en registro
    haveBackup: '¿Ya tienes un backup?',
    restoreBackup: 'Restaurar Backup',
    restoreSuccess: '¡Datos restaurados con éxito!',
  },

  // Dashboard
  dashboard: {
    lastConfession: 'ÚLTIMA CONFESIÓN',
    myHistory: 'MI HISTORIAL',
    nextConfession: 'PRÓXIMA CONFESIÓN',
    daysWithout: 'LLEVO %{count} DÍA',
    daysWithoutPlural: 'LLEVO %{count} DÍAS',
    withoutConfessing: 'SIN CONFESARME',
  },

  // Historial
  history: {
    title: 'Mi Historial',
    empty: 'Ninguna confesión registrada aún',
    sinForgiven: 'pecado perdonado',
    sinsForgiven: 'pecados perdonados',
  },

  // Examen de Conciencia
  exam: {
    title: 'Examen de Conciencia',
  },

  // Mis Pecados
  sins: {
    title: 'Mis Pecados',
    empty: 'Sin pecados registrados',
    addSin: 'Pecado',
    describeSin: 'Describe el pecado:',
    inputPlaceholder: 'Escribe aquí...',
    removeSin: 'Eliminar pecado',
    removeSinMessage: '¿Deseas eliminar este pecado de la lista?',
    reconciliare: 'RECONCILIARE',
    confessionTitle: 'Reconciliare',
    confessionMessage: '¿Ya te confesaste y recibiste la absolución? Esta acción limpiará tu lista de pecados y registrará la confesión.',
    confessionConfirm: 'Sí, me confesé',
    successTitle: '¡Felicidades!',
    successMessage: 'Tu confesión ha sido registrada. ¡Que Dios te bendiga!',
    warningTitle: 'Atención',
    warningMessage: 'No hay pecados para confesar.',
  },

  // Modal de Fecha
  datePicker: {
    title: 'Próxima Confesión',
    subtitle: '¿Cuándo planeas confesarte de nuevo?',
    addToCalendar: 'Agregar recordatorio al calendario',
  },

  // Configuración
  settings: {
    title: 'Configuración',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    password: 'Contraseña',
    currentPassword: 'Contraseña actual',
    newPassword: 'Nueva Contraseña',
    newPasswordPlaceholder: 'Nueva contraseña (4 dígitos)',
    themes: 'Temas:',
    languages: 'Idiomas:',
    update: 'ACTUALIZAR',
    pinUpdated: '¡PIN actualizado con éxito!',
    saved: '¡Configuración guardada!',
    // Backup
    backup: 'Copia de seguridad',
    exportData: 'Exportar Datos',
    importData: 'Importar Datos',
    exportDescription: 'Crear copia de seguridad cifrada de tus datos',
    importDescription: 'Restaurar datos de una copia de seguridad anterior',
    exportSuccess: '¡Copia de seguridad exportada con éxito!',
    importSuccess: '¡Datos restaurados con éxito! Reinicia la app para aplicar los cambios.',
    importSuccessRestart: '¡Datos restaurados con éxito! La aplicación se reiniciará para aplicar los cambios.',
    importErrorFormat: 'Archivo de copia de seguridad inválido. Verifica que seleccionaste el archivo correcto.',
    importErrorPassword: 'PIN incorrecto. Usa el mismo PIN usado para crear la copia de seguridad.',
    importErrorUnknown: 'Error al importar la copia de seguridad. Inténtalo de nuevo.',
    importErrorExtension: 'Archivo inválido. Selecciona un archivo .rcl generado por Reconciliare.',
    enterPinToExport: 'Ingresa tu PIN para crear la copia de seguridad:',
    enterPinToImport: 'Ingresa el PIN usado para crear esta copia de seguridad:',
    selectBackupFile: 'Selecciona el archivo de copia de seguridad',
    noFileSelected: 'Ningún archivo seleccionado',
  },

  // Contribuir
  contribute: {
    title: 'Contribuir',
    text1: '¡Muchas gracias por usar la app RECONCILIARE! Esperamos que esto pueda ayudarte en tus confesiones.',
    text2: 'Si deseas contribuir con alguna donación para ayudar a mantener este proyecto, haz clic en el botón de abajo.',
    text3: 'Tu contribución ayuda a mantener la aplicación gratuita y disponible para todos los católicos que desean vivir una vida de oración y reconciliación con Dios.',
    donateButton: 'QUIERO HACER UNA DONACIÓN',
    thankYou: '¡Que Dios te bendiga a ti y a tu familia!',
  },

  // Ayuda
  help: {
    title: 'Ayuda',
    firstAccess: 'PRIMER ACCESO',
    firstAccessText: 'Para registrarte en la app es fácil, solo ingresa tu nombre y foto. Posteriormente ingresa tu PIN para garantizar que ninguna otra persona que tome tu celular vea tu examen de conciencia. También puedes personalizar la app eligiendo tu idioma y el tema que más te guste.',
    homeScreen: 'PANTALLA INICIAL',
    homeScreenText: 'Esta pantalla es tu dashboard, donde podrás visualizar tu historial de confesiones, cuántos días llevas sin confesarte, cuál es la fecha de tu última confesión y cuándo será la próxima.',
    examConscience: 'EXAMEN DE CONCIENCIA',
    examConscienceText: 'Antes de tu confesión, lee atentamente cada pecado y marca cuál de ellos cometiste. De esta forma cada pecado será transferido automáticamente a tu lista de pecados, donde mostrará un resumen general con todos tus pecados para que puedas confesarlos al sacerdote. Después de tu confesión, recuerda hacer clic en el botón RECONCILIARE, ¡listo! Así como tú, tu app estará limpia y con todos los pecados borrados.',
    prayersPreparation: 'ORACIONES Y PREPARACIÓN',
    prayersPreparationText: 'En estas secciones podrás rezar algunas oraciones o meditar sobre el sacramento de la reconciliación y su importancia.',
    pin: 'PIN',
    pinText: 'El PIN es un código personal con 4 números que sirve para proteger tu privacidad. Si olvidas tu PIN, podrás restablecerlo, pero todos los pecados que estén en tu lista de pecados y en el examen de conciencia serán borrados.',
    settings: 'CONFIGURACIÓN',
    settingsText: 'Si deseas cambiar el color del tema, tu foto o tu PIN, accede al menú Configuración y deja la app como quieras.',
  },

  // Acerca de
  about: {
    title: 'Acerca de',
    text1: 'RECONCILIARE viene del latín y significa "reconciliar", "restablecer la paz", "volver a la amistad". Es exactamente eso lo que el sacramento de la Reconciliación nos proporciona: la oportunidad de reconciliarnos con Dios y con la Iglesia.',
    text2: 'Jesús, con su infinita bondad, instituyó el sacramento de la reconciliación regalándonos Su Misericordia Divina. Por medio de este sacramento, podemos recibir el perdón de nuestros pecados y la gracia de comenzar de nuevo.',
    text3: 'La aplicación RECONCILIARE fue desarrollada para ayudar a todos los católicos a elaborar su examen de conciencia antes de la confesión. Fue proyectada para ser simple y fácil de usar, ayudándote a recordar tus pecados de modo a hacer una buena confesión.',
    text4: '¡Que Dios te bendiga a ti y a tu familia!',
    version: 'Versión',
  },

  // Artículo no encontrado
  article: {
    notFound: 'Artículo no encontrado',
  },

  // Calendario
  calendar: {
    eventTitle: 'Confesión - Reconciliare',
    eventNotes: 'Recordatorio para confesarte. ¡Que Dios te bendiga!',
  },

  // Oraciones
  prayers: {
    actOfContrition: {
      title: 'Acto de Contrición',
      content: 'Señor mío Jesucristo, Dios y Hombre verdadero, me pesa de todo corazón haberte ofendido. Propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me sea impuesta. Te ofrezco mi vida, obras y trabajos en satisfacción de todos mis pecados. Confío en tu infinita bondad y misericordia que me perdonarás por los méritos de tu preciosísima Sangre, Pasión y Muerte, y me darás gracia para enmendarme y perseverar en tu santo servicio hasta el fin de mi vida. Amén.',
    },
    actOfContritionAlt: {
      title: 'Acto de Contrición (Alternativo)',
      content: 'Dios mío, me arrepiento de todo corazón de todos mis pecados y los aborrezco, porque al pecar, no sólo merezco las penas establecidas por ti justamente, sino principalmente porque te ofendí, a ti sumo Bien y digno de amor por encima de todas las cosas. Por eso propongo firmemente, con ayuda de tu gracia, no pecar más en adelante y huir de toda ocasión de pecado. Amén.',
    },
    beforeConfession: {
      title: 'Oración Antes de la Confesión',
      content: 'Señor, Dios mío, dame luz para conocer todos mis pecados y gracia para arrepentirme sinceramente de ellos. Concédeme humildad para confesarlos sin orgullo y sin miedo. Haz que me acerque a este sacramento con fe, esperanza y amor. Que tu Espíritu Santo ilumine mi mente y toque mi corazón, para que haga una buena confesión y reciba dignamente tu perdón. Por Cristo, nuestro Señor. Amén.',
    },
    afterConfession: {
      title: 'Oración Después de la Confesión',
      content: 'Señor Jesucristo, te agradezco por el don de tu misericordia que acabo de recibir en el sacramento de la Reconciliación. Te agradezco por haber perdonado mis pecados y por haberme devuelto tu amistad. Ayúdame a permanecer fiel a las promesas que hice. Fortaléceme con tu gracia para que no vuelva a caer en las mismas faltas. Que la alegría de tu perdón me acompañe siempre y me ayude a perdonar a los demás como tú me has perdonado. Amén.',
    },
    ourFather: {
      title: 'Padre Nuestro',
      content: 'Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.',
    },
    hailMary: {
      title: 'Ave María',
      content: 'Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
    },
    glory: {
      title: 'Gloria al Padre',
      content: 'Gloria al Padre, al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre. Amén.',
    },
    hailHolyQueen: {
      title: 'Salve Regina',
      content: 'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra. Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente!, ¡oh piadosa!, ¡oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Cristo. Amén.',
    },
    creed: {
      title: 'Credo',
      content: 'Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.',
    },
    saintMichael: {
      title: 'Oración a San Miguel Arcángel',
      content: 'San Miguel Arcángel, defiéndenos en la batalla. Sé nuestro amparo contra la perversidad y asechanzas del demonio. Reprímale Dios, pedimos suplicantes, y tú, Príncipe de la Milicia Celestial, arroja al infierno con el divino poder a Satanás y a los otros espíritus malignos que andan dispersos por el mundo para la perdición de las almas. Amén.',
    },
    comeHolySpirit: {
      title: 'Ven, Espíritu Santo',
      content: `Ven, Espíritu Santo, llena los corazones de tus fieles y enciende en ellos el fuego de tu amor. Envía tu Espíritu y todo será creado. Y renovarás la faz de la tierra.

Oremos: Oh Dios, que has instruido los corazones de tus fieles con la luz del Espíritu Santo, concédenos que sintamos rectamente con el mismo Espíritu y gocemos siempre de su divino consuelo. Por Cristo nuestro Señor. Amén.`,
    },
    angelus: {
      title: 'Ángelus',
      content: `V. El Ángel del Señor anunció a María.
R. Y concibió por obra del Espíritu Santo.

Ave María...

V. He aquí la esclava del Señor.
R. Hágase en mí según tu palabra.

Ave María...

V. Y el Verbo se hizo carne.
R. Y habitó entre nosotros.

Ave María...

V. Ruega por nosotros, Santa Madre de Dios.
R. Para que seamos dignos de las promesas de Cristo.

Oremos: Infunde, Señor, tu gracia en nuestras almas, para que los que hemos conocido por el anuncio del Ángel la Encarnación de tu Hijo Jesucristo, lleguemos por su Pasión y su Cruz a la gloria de la Resurrección. Por Cristo nuestro Señor. Amén.`,
    },
  },

  // Examen de Conciencia - Categorías
  examCategories: {
    firstCommandment: {
      name: 'Primer Mandamiento: Amar a Dios sobre todas las cosas',
      sins: [
        { id: 'p1-1', description: '¿Descuidé el conocimiento de mi fe, tal como el Catecismo la enseña, como el Credo de los Apóstoles, los Diez Mandamientos, los Siete Sacramentos, el Padre Nuestro, etc.?' },
        { id: 'p1-2', description: '¿No puse a Dios en primer lugar en mi vida?' },
        { id: 'p1-3', description: '¿Alguna vez dudé conscientemente de alguna enseñanza de la Iglesia o la negué?' },
        { id: 'p1-4', description: '¿Dudé de la existencia de Dios?' },
        { id: 'p1-5', description: '¿Tuve miedo de Satanás más que confianza en Dios?' },
        { id: 'p1-6', description: '¿Tomé parte en un acto de culto no católico?' },
        { id: 'p1-7', description: '¿Soy miembro de alguna organización religiosa no católica, de alguna sociedad secreta o de un grupo anticatólico?' },
        { id: 'p1-8', description: '¿Alguna vez leí o escuché, con conciencia de lo que hacía, alguna literatura herética, blasfema o anticatólica, poniendo así en riesgo mi fe?' },
        { id: 'p1-9', description: '¿Practiqué alguna superstición (como amuletos, tarot, horóscopo, curanderos, etc.)?' },
        { id: 'p1-10', description: '¿Participé en algún acto de brujería, espiritismo, ocultismo, cartomancia, pacto demoníaco o hechicería?' },
        { id: 'p1-11', description: '¿Omití algún deber o práctica religiosa por respeto humano?' },
        { id: 'p1-12', description: '¿Dejé de hablar con Dios diariamente?' },
        { id: 'p1-13', description: '¿Dejé de leer y vivir la Palabra de Dios?' },
        { id: 'p1-14', description: '¿Dejé de rezar fielmente mis oraciones diarias?' },
        { id: 'p1-15', description: '¿Abusé de los Sacramentos de alguna manera?' },
        { id: 'p1-16', description: '¿Me burlé de Dios, de Nuestra Señora, de los Santos, de la Iglesia, de los Sacramentos o de cualquier cosa santa?' },
        { id: 'p1-17', description: '¿Fui culpable de gran irreverencia en la iglesia (conversaciones, desatención, mala conducta, manera como estaba vestido)?' },
        { id: 'p1-18', description: '¿Fui indiferente respecto a mi fe Católica - creyendo que una persona puede salvarse en cualquier religión, o que todas las religiones son iguales?' },
        { id: 'p1-19', description: '¿Presumí en cualquier situación que tenía garantizada la misericordia de Dios?' },
        { id: 'p1-20', description: '¿Desconfié de la misericordia de Dios?' },
        { id: 'p1-21', description: '¿Odié o detesté a Dios?' },
        { id: 'p1-22', description: '¿Abandoné mi fe o tuve vergüenza de ella?' },
        { id: 'p1-23', description: '¿Idolatré o di más importancia a alguna persona, actividad u objeto que a Dios?' },
        { id: 'p1-24', description: '¿No tuve fe en Dios, blasfemé o me rebelé contra Él en los momentos de dificultad y sufrimiento?' },
        { id: 'p1-25', description: '¿Blasfemé contra la Santísima Trinidad?' },
        { id: 'p1-26', description: '¿Recibí la Sagrada Comunión en estado de pecado mortal?' },
        { id: 'p1-27', description: '¿Me comporté mal en la Iglesia (conversando, distrayéndome en la Misa, yendo mal vestido, etc.)?' },
        { id: 'p1-28', description: '¿No fui solidario con los pobres?' },
        { id: 'p1-29', description: '¿Dejé de ayudar a los necesitados?' },
        { id: 'p1-30', description: '¿Fui racista?' },
        { id: 'p1-31', description: '¿Guardé rencor y resentimiento?' },
        { id: 'p1-32', description: '¿Fui egoísta?' },
        { id: 'p1-33', description: '¿Dejé de ver a Dios en mi prójimo?' },
        { id: 'p1-34', description: '¿Dejé de promover el bien de mi semejante?' },
        { id: 'p1-35', description: '¿Fui omiso/desinteresado en la defensa de la justicia y la verdad?' },
      ],
    },
    secondCommandment: {
      name: 'Segundo Mandamiento: No tomar el Nombre de Dios en vano',
      sins: [
        { id: 'p2-1', description: '¿Juré por el Nombre de Dios innecesariamente o sin reverencia?' },
        { id: 'p2-2', description: '¿A través de palabras o acciones, murmuré o me quejé contra Dios?' },
        { id: 'p2-3', description: '¿Dije palabras injuriosas contra la Virgen María o los Santos?' },
        { id: 'p2-4', description: '¿Me maldije a mí mismo o a alguien o a alguna criatura?' },
        { id: 'p2-5', description: '¿Provoqué a alguien a la ira, pecar, maldecir, blasfemar u ofender a Dios?' },
        { id: 'p2-6', description: '¿Quebranté una promesa hecha a Dios?' },
        { id: 'p2-7', description: '¿Usé el nombre de Dios en vano o con rabia?' },
      ],
    },
    thirdCommandment: {
      name: 'Tercer Mandamiento: Santificar los Domingos y Fiestas de Guardar',
      sins: [
        { id: 'p3-1', description: '¿Dejé de participar en la Santa Misa el Domingo o Fiesta de Guardar/precepto de la Iglesia?' },
        { id: 'p3-2', description: '¿Llegué tarde o salí antes del fin de la Misa sin motivo grave?' },
        { id: 'p3-3', description: '¿Fui a misa solamente cuando me dieron ganas?' },
        { id: 'p3-4', description: '¿Hice que otras personas faltaran a la Misa en Domingos y Días Santos de precepto, o salieran temprano o llegaran tarde a la Misa?' },
        { id: 'p3-5', description: '¿Estuve desatento a propósito durante la Misa?' },
        { id: 'p3-6', description: '¿Jugué o falté al respeto en la iglesia?' },
        { id: 'p3-7', description: '¿Dejé de pagar el diezmo?' },
        { id: 'p3-8', description: '¿Dejé de participar en las actividades de la parroquia?' },
        { id: 'p3-9', description: '¿No procuré dar testimonio de vida cristiana?' },
        { id: 'p3-10', description: '¿No demostré interés por las cosas de la Iglesia católica?' },
        { id: 'p3-11', description: '¿Dejé de confesarme con frecuencia?' },
        { id: 'p3-12', description: '¿Me confesé sin el firme propósito de corregirme?' },
        { id: 'p3-13', description: '¿Falté al ayuno y abstinencia de carne en el día prescrito?' },
        { id: 'p3-14', description: '¿Trabajé o hice trabajar a alguien en Domingo o Fiesta de precepto sin necesidad?' },
        { id: 'p3-15', description: '¿Compré o vendí cosas sin necesidad en Domingos y Días Santos de precepto?' },
      ],
    },
    fourthCommandment: {
      name: 'Cuarto Mandamiento: Honrar padre y madre',
      sins: [
        { id: 'p4-1', description: '¿Desobedecí a mis padres, les falté al respeto, descuidé ayudarlos en sus necesidades o me negué a hacerlo?' },
        { id: 'p4-2', description: '¿Mostré irreverencia/falta de respeto hacia personas en posiciones de autoridad?' },
        { id: 'p4-3', description: '¿Desobedecí a las autoridades legítimas?' },
        { id: 'p4-4', description: '¿Insulté o hablé mal de sacerdotes o de otras personas consagradas a Dios?' },
        { id: 'p4-5', description: '¿Tuve menos reverencia hacia las personas de edad?' },
        { id: 'p4-6', description: '¿Traté mal a mi cónyuge o a mis hijos?' },
        { id: 'p4-7', description: '¿Puse a mi cónyuge en segundo plano?' },
        { id: 'p4-8', description: '¿Fui desobediente o irrespetuoso con mi cónyuge?' },
        { id: 'p4-9', description: '¿Descuidé las necesidades de mi familia? (materiales, presencia, etc.)' },
        { id: 'p4-10', description: '¿No procuré bautizar pronto a mis hijos?' },
        { id: 'p4-11', description: '¿Dejé de enseñar la fe católica y la práctica religiosa a mis hijos?' },
        { id: 'p4-12', description: '¿Permití que mis hijos descuidaran sus deberes religiosos?' },
        { id: 'p4-13', description: '¿Consentí que mis hijos tuvieran noviazgo sin haber objetivo claro de encaminar la relación hasta el matrimonio?' },
        { id: 'p4-14', description: '¿Consentí que mis hijos tuvieran relaciones sexuales fuera del matrimonio?' },
        { id: 'p4-15', description: '¿Permití que mis hijos vieran pornografía o contenidos inmorales?' },
        { id: 'p4-16', description: '¿Dejé de vigilar las compañías con quienes andan mis hijos?' },
        { id: 'p4-17', description: '¿Abandoné mis responsabilidades de padre/madre?' },
        { id: 'p4-18', description: '¿Dejé de disciplinar a mis hijos cuando necesitaban corrección?' },
        { id: 'p4-19', description: '¿Di mal ejemplo a mis hijos?' },
        { id: 'p4-20', description: '¿Escandalicé a mis hijos al discutir con mi cónyuge frente a ellos?' },
        { id: 'p4-21', description: '¿Escandalicé a mis hijos al decir groserías y obscenidades frente a ellos?' },
        { id: 'p4-22', description: '¿No guardé la modestia en mi casa?' },
        { id: 'p4-23', description: '¿Fui grosero(a) en casa?' },
        { id: 'p4-24', description: '¿Peleé o discutí frecuentemente?' },
        { id: 'p4-25', description: '¿Fui impaciente y/o autoritario?' },
        { id: 'p4-26', description: '¿Falté con el diálogo y el amor en casa?' },
        { id: 'p4-27', description: '¿Dejé de rezar en familia?' },
        { id: 'p4-28', description: '¿Permití que mis hijos usaran ropa inmodesta (minifaldas; pantalones ajustados; vestidos o camisones ajustados; blusas transparentes; shorts muy cortos; ropa de baño reveladora; etc.)?' },
        { id: 'p4-29', description: '¿Negué a mis hijos la libertad de casarse o seguir una vocación religiosa?' },
        { id: 'p4-30', description: '¿No perdoné a mis familiares por las ofensas?' },
        { id: 'p4-31', description: '¿Tuve vergüenza de mis familiares?' },
        { id: 'p4-32', description: '¿Causé tristeza a mis familiares?' },
        { id: 'p4-33', description: '¿Entorpecí la armonía familiar?' },
        { id: 'p4-34', description: '¿Hice desorden y entorpecí las clases en la escuela?' },
        { id: 'p4-35', description: '¿Fui negligente en la escuela o en el trabajo?' },
        { id: 'p4-36', description: '¿Fui irresponsable en el estudio y deberes de la escuela?' },
        { id: 'p4-37', description: '¿Irrespeté a los profesores y compañeros?' },
        { id: 'p4-38', description: '¿Cometí algún tipo de agresión contra algún miembro de la familia?' },
      ],
    },
    fifthCommandment: {
      name: 'Quinto Mandamiento: No matarás',
      sins: [
        { id: 'p5-1', description: '¿No me acepto como soy?' },
        { id: 'p5-2', description: '¿Busqué o deseé acabar con mi vida?' },
        { id: 'p5-3', description: '¿Deseé o apresuré la muerte o el herimiento de alguien?' },
        { id: 'p5-4', description: '¿Alimenté el odio hacia alguien?' },
        { id: 'p5-5', description: '¿Oprimí a alguien?' },
        { id: 'p5-6', description: '¿Deseé vengarme?' },
        { id: 'p5-7', description: '¿Provoqué desconfianza o discordia entre otras personas?' },
        { id: 'p5-8', description: '¿Discutí o luché con alguien?' },
        { id: 'p5-9', description: '¿Deseé mal a alguien?' },
        { id: 'p5-10', description: '¿Quise herir o maltratar a alguien?' },
        { id: 'p5-11', description: '¿Me niego a hablar con alguien, o guardo resentimiento hacia alguien?' },
        { id: 'p5-12', description: '¿Me alegré con la desgracia ajena?' },
        { id: 'p5-13', description: '¿Tuve celos o envidia de alguien?' },
        { id: 'p5-14', description: '¿Hice, intenté o aconsejé a alguien a hacer un aborto?' },
        { id: 'p5-15', description: '¿Mutilé mi cuerpo innecesariamente?' },
        { id: 'p5-16', description: '¿Consentí pensamientos de suicidio o atenté contra mi vida?' },
        { id: 'p5-17', description: '¿Me embriagué o usé drogas ilícitas?' },
        { id: 'p5-18', description: '¿Comí en exceso, cometiendo el pecado de la gula?' },
        { id: 'p5-19', description: '¿Maltraté, herí o maté algún animal o criatura de Dios sin necesidad?' },
        { id: 'p5-20', description: '¿Desperdicié sin necesidad recursos naturales (agua) o comida?' },
        { id: 'p5-21', description: '¿Dejé de comer lo suficiente por descuido de la salud?' },
        { id: 'p5-22', description: '¿Dejé de dedicar tiempo al descanso y ocio?' },
        { id: 'p5-23', description: '¿Trabajé demasiado perjudicando la salud?' },
        { id: 'p5-24', description: '¿Tomé medicamentos sin necesidad o de forma abusiva?' },
        { id: 'p5-25', description: '¿Dejé de corregir a alguien de manera fraterna y caritativa?' },
        { id: 'p5-26', description: '¿Causé daños al alma de alguien, especialmente niños, dando malos ejemplos?' },
        { id: 'p5-27', description: '¿Hice mal a mi alma, exponiéndola intencionalmente y sin necesidad a tentaciones?' },
        { id: 'p5-28', description: '¿Hice mal a mi cuerpo, poniéndolo en riesgo y no cuidándolo como templo del Espíritu Santo?' },
        { id: 'p5-29', description: '¿Arriesgué mi vida sin necesidad?' },
        { id: 'p5-30', description: '¿No evité la pereza y la ociosidad?' },
        { id: 'p5-31', description: '¿Fui imprudente, conduciendo a alta velocidad o bajo efectos del alcohol/drogas o usé el celular mientras conducía?' },
        { id: 'p5-32', description: '¿Irrespeté las leyes de tránsito, poniendo en riesgo la vida de las personas?' },
        { id: 'p5-33', description: '¿Me negué a respetar la naturaleza y el medio ambiente?' },
      ],
    },
    sixthNinthCommandment: {
      name: 'Sexto y Noveno Mandamientos: No pecar contra la castidad / No codiciar la mujer del prójimo',
      sins: [
        { id: 'p6-1', description: '¿Negué a mi cónyuge tener relaciones sexuales sin motivo justo?' },
        { id: 'p6-2', description: '¿Practiqué control de natalidad de manera artificial (preservativo, píldoras, DIU, vasectomía, ligadura de trompas)?' },
        { id: 'p6-3', description: '¿Abusé de mis derechos matrimoniales de algún otro modo?' },
        { id: 'p6-4', description: '¿Cometí adulterio en mi matrimonio (en pensamientos, miradas, palabras o actos)?' },
        { id: 'p6-5', description: '¿Practiqué actos sexuales antinaturales (sexo anal)?' },
        { id: 'p6-6', description: '¿Practiqué pedofilia?' },
        { id: 'p6-7', description: '¿Practiqué relación sexual fuera del matrimonio (fornicación)?' },
        { id: 'p6-8', description: '¿Cometí el pecado de fornicación con mi novio(a) fuera del matrimonio?' },
        { id: 'p6-9', description: '¿Cometí algún pecado impuro contra la naturaleza (homosexualidad o lesbianismo, etc.)?' },
        { id: 'p6-10', description: '¿Provoqué escándalos?' },
        { id: 'p6-11', description: '¿Participé en orgías?' },
        { id: 'p6-12', description: '¿Participé en conversaciones impuras?' },
        { id: 'p6-13', description: '¿Tuve relación sexual con prostitutas o fui a clubes nocturnos donde ocurre prostitución?' },
        { id: 'p6-14', description: '¿Toqué o abracé a otra persona con deseo sexual fuera del matrimonio?' },
        { id: 'p6-15', description: '¿Intercambié besos prolongados en mi noviazgo o compromiso?' },
        { id: 'p6-16', description: '¿Toqué las partes íntimas de mi novio(a) o prometido(a)?' },
        { id: 'p6-17', description: '¿Practiqué el intercambio prolongado de caricias en mi noviazgo o compromiso?' },
        { id: 'p6-18', description: '¿Pequé impuramente contra mí mismo (masturbación)?' },
        { id: 'p6-19', description: '¿Me dejé llevar por fantasías sexuales, como vibradores, ropa erótica o juguetes sexuales?' },
        { id: 'p6-20', description: '¿Consentí en pensamientos impuros, o tuve placer en ellos?' },
        { id: 'p6-21', description: '¿Consentí en deseos impuros hacia alguien, o deseé conscientemente ver o hacer algo impuro?' },
        { id: 'p6-22', description: '¿Traté a mi cónyuge como objeto de placer sexual?' },
        { id: 'p6-23', description: '¿Fui ocasión de pecado para otros, por usar ropa ajustada, reveladora o inmodesta?' },
        { id: 'p6-24', description: '¿Hice algo, deliberadamente o por descuido, que provocara pensamientos o deseos impuros en otra persona?' },
        { id: 'p6-25', description: '¿Leí libros indecentes o vi imágenes obscenas?' },
        { id: 'p6-26', description: '¿Vi películas, programas de TV o pornografía en internet?' },
        { id: 'p6-27', description: '¿Todavía conservo algún material de pornografía?' },
        { id: 'p6-28', description: '¿Usé lenguaje indecente o conté historias indecentes?' },
        { id: 'p6-29', description: '¿Escuché historias o chistes indecentes de buena gana?' },
        { id: 'p6-30', description: '¿Me vanaglorié de mis pecados sexuales, o me gustó recordar pecados antiguos?' },
        { id: 'p6-31', description: '¿Estuve con compañías indecentes?' },
        { id: 'p6-32', description: '¿Consentí en miradas impuras, deseando a otras personas?' },
        { id: 'p6-33', description: '¿Dejé de controlar mi imaginación con pensamientos impuros?' },
        { id: 'p6-34', description: '¿Dejé de rezar inmediatamente para alejar malos pensamientos y tentaciones?' },
        { id: 'p6-35', description: '¿No evité las ocasiones de impureza?' },
        { id: 'p6-36', description: '¿Fui a bailes inmodestos o representaciones teatrales indecentes?' },
        { id: 'p6-37', description: '¿Estuve solo(a) sin necesidad en compañía de alguien del sexo opuesto, con mala intención?' },
      ],
    },
    seventhTenthCommandment: {
      name: 'Séptimo y Décimo Mandamientos: No robar / No codiciar los bienes ajenos',
      sins: [
        { id: 'p7-1', description: '¿Robé alguna cosa?' },
        { id: 'p7-2', description: '¿Dañé o destruí la propiedad de otra persona?' },
        { id: 'p7-3', description: '¿Dejé estropear por negligencia la propiedad de otra persona?' },
        { id: 'p7-4', description: '¿Fui negligente en la custodia del dinero o bienes de otra persona?' },
        { id: 'p7-5', description: '¿Jugué en exceso o aposté de forma irresponsable?' },
        { id: 'p7-6', description: '¿Engañé a alguien, fui descuidado o me negué a pagar mis deudas?' },
        { id: 'p7-7', description: '¿Adquirí algo que sabía que había sido robado?' },
        { id: 'p7-8', description: '¿Dejé de devolver algo prestado?' },
        { id: 'p7-9', description: '¿Perjudiqué a mi patrón, no trabajando como se esperaba o en los gastos?' },
        { id: 'p7-10', description: '¿Fui deshonesto con el salario de mis empleados?' },
        { id: 'p7-11', description: '¿Me negué a ayudar a alguien que necesitaba urgentemente ayuda, o fui descuidado en hacerlo?' },
        { id: 'p7-12', description: '¿Dejé de restituir lo que robé, u obtuve por fraude?' },
        { id: 'p7-13', description: '¿Tuve envidia de alguien por tener algo que yo no tengo?' },
        { id: 'p7-14', description: '¿Envidié los bienes de alguien?' },
        { id: 'p7-15', description: '¿He sido avaro?' },
        { id: 'p7-16', description: '¿Oprimí, menosprecié o tuve prejuicio contra alguien por ser más pobre que yo?' },
        { id: 'p7-17', description: '¿He dado demasiada importancia a los bienes y comodidades materiales?' },
        { id: 'p7-18', description: '¿Soborné a alguien?' },
        { id: 'p7-19', description: '¿Fui responsable o participé en algún acto de corrupción?' },
        { id: 'p7-20', description: '¿Me quedé con objetos encontrados sin buscar al dueño? (cuando es posible)' },
        { id: 'p7-21', description: '¿Hice trampa en las relaciones comerciales?' },
        { id: 'p7-22', description: '¿Desvié materiales de empresas públicas o privadas?' },
        { id: 'p7-23', description: '¿Irrespeté las leyes justas del Estado y del municipio?' },
        { id: 'p7-24', description: '¿Cometí fraude o evadí impuestos?' },
        { id: 'p7-25', description: '¿Causé perjuicio a alguien por mi culpa (cheque sin fondos, etc.)?' },
        { id: 'p7-26', description: '¿Busqué tener ganancias abusivas explotando a otras personas?' },
      ],
    },
    eighthCommandment: {
      name: 'Octavo Mandamiento: No levantar falso testimonio',
      sins: [
        { id: 'p8-1', description: '¿Mentí?' },
        { id: 'p8-2', description: '¿Mentí respecto a alguien (calumnia)?' },
        { id: 'p8-3', description: '¿Mis mentiras causaron a alguien daños materiales o espirituales?' },
        { id: 'p8-4', description: '¿Hice juicios prejuiciosos respecto a alguien?' },
        { id: 'p8-5', description: '¿Hablé mal de alguien (calumnia, difamación o chisme)?' },
        { id: 'p8-6', description: '¿Revelé los pecados o defectos de otra persona sin necesidad?' },
        { id: 'p8-7', description: '¿Revelé secretos que me fueron confiados?' },
        { id: 'p8-8', description: '¿Fui culpable de hacer intrigas o causar enemistades?' },
        { id: 'p8-9', description: '¿Di crédito o apoyo a la divulgación de escándalos sobre mi prójimo?' },
        { id: 'p8-10', description: '¿Sembré discordia entre las personas por maledicencia?' },
        { id: 'p8-11', description: '¿Levanté falso testimonio contra el prójimo?' },
        { id: 'p8-12', description: '¿Juré en falso o firmé documentos falsos?' },
        { id: 'p8-13', description: '¿Soy crítico o negativo sin necesidad?' },
        { id: 'p8-14', description: '¿Falto a la caridad en mis conversaciones?' },
        { id: 'p8-15', description: '¿Alguna vez hice que otros pecaran?' },
        { id: 'p8-16', description: '¿Cooperé en los pecados de otros?' },
        { id: 'p8-17', description: '¿Dejé de reparar el mal que hice a otros?' },
      ],
    },
    capitalSins: {
      name: 'Vicios/Pecados Capitales',
      sins: [
        { id: 'vc-1', description: 'Soberbia: ¿He caído en el activismo?' },
        { id: 'vc-2', description: 'Soberbia: ¿Me consideré mejor que los demás?' },
        { id: 'vc-3', description: 'Soberbia: ¿Busqué llamar la atención sobre mi persona?' },
        { id: 'vc-4', description: 'Soberbia: ¿Fui hipócrita y fingido?' },
        { id: 'vc-5', description: 'Soberbia: ¿Tuve delirios de grandeza?' },
        { id: 'vc-6', description: 'Soberbia: ¿Critiqué a las personas destructivamente?' },
        { id: 'vc-7', description: 'Soberbia: ¿Menosprecié la doctrina de la Iglesia Católica?' },
        { id: 'vc-8', description: 'Envidia: ¿Tuve envidia de los dones, bienes o fama de otros?' },
        { id: 'vc-9', description: 'Envidia: ¿Quiero ser un siervo irremplazable en mi comunidad?' },
        { id: 'vc-10', description: 'Envidia: ¿Dejé de desarrollar los dones que Dios me concedió?' },
        { id: 'vc-11', description: 'Ira: ¿Fui impaciente?' },
        { id: 'vc-12', description: 'Ira: ¿Fui rencoroso o vengativo?' },
        { id: 'vc-13', description: 'Ira: ¿Fui agresivo o nervioso?' },
        { id: 'vc-14', description: 'Avaricia: ¿Fui apegado al dinero y a las cosas materiales?' },
        { id: 'vc-15', description: 'Avaricia: ¿Busqué vivir en el lujo?' },
        { id: 'vc-16', description: 'Avaricia: ¿Dejé de repartir mis bienes?' },
        { id: 'vc-17', description: 'Pereza: ¿Tuve pereza de rezar, trabajar o ayudar a las personas?' },
        { id: 'vc-18', description: 'Pereza: ¿Soy desinteresado por la construcción de un mundo más justo, fraterno y cristiano?' },
        { id: 'vc-19', description: 'Pereza: ¿Dejé de tomar posición evangélica no denunciando las injusticias, la miseria, el hambre, la violencia, el prejuicio, la discriminación, el erotismo, las señales de muerte, el consumismo?' },
        { id: 'vc-20', description: 'Gula: ¿Excedí al comer?' },
        { id: 'vc-21', description: 'Gula: ¿Perdí el control al beber?' },
        { id: 'vc-22', description: 'Gula: ¿Cometí exceso al fumar?' },
        { id: 'vc-23', description: 'Gula: ¿Consumí drogas?' },
      ],
    },
    churchCommandments: {
      name: 'Mandamientos de la Iglesia y la Santa Misa',
      sins: [
        { id: 'pi-1', description: '¿Dejé de participar en la Santa Misa los Domingos y Fiestas de precepto?' },
        { id: 'pi-2', description: '¿Incumplí el ayuno o abstinencia en las fechas prescritas?' },
        { id: 'pi-3', description: '¿Dejé de guardar el ayuno eucarístico (1 hora antes de la comunión)?' },
        { id: 'pi-4', description: '¿Dejé de confesarme al menos una vez al año?' },
        { id: 'pi-5', description: '¿No recibí la Sagrada Eucaristía al menos una vez al año?' },
        { id: 'pi-6', description: '¿Teniendo ingresos provenientes de mi trabajo, dejé de contribuir con el diezmo o gastos de la parroquia?' },
        { id: 'pi-7', description: '¿No observé las leyes de la Iglesia sobre el Matrimonio, es decir, respecto al Matrimonio sin la presencia de un sacerdote, o en el caso del matrimonio con un pariente cercano o un no Católico?' },
        { id: 'pi-8', description: '¿Recibí la Eucaristía sin preparación/devoción o espíritu de adoración?' },
        { id: 'pi-9', description: '¿Estuve conversando durante la Santa Misa?' },
        { id: 'pi-10', description: '¿Usé el celular durante la Santa Misa sin justificación?' },
        { id: 'pi-11', description: '¿Juzgué a las personas que estaban sirviendo en el altar o participando de la Misa?' },
        { id: 'pi-12', description: '¿Hablé mal del Sacerdote, de su postura o de la homilía?' },
        { id: 'pi-13', description: '¿Mi postura en la Misa ha sido de descuido, negligencia o pereza?' },
        { id: 'pi-14', description: '¿He dormido durante la homilía?' },
        { id: 'pi-15', description: '¿He mostrado aversión a los ritos que se realizan en la Santa Misa?' },
        { id: 'pi-16', description: '¿No he colaborado en la participación de cada rito, ni en el silencio, ni con alegría ni con fe?' },
        { id: 'pi-17', description: '¿Me he omitido de la participación de algún rito litúrgico como hacer una lectura, dando excusas de que no soy capaz, que no sé hacerlo, o por vergüenza?' },
      ],
    },
    blasphemiesMary: {
      name: 'Blasfemias contra el Corazón Inmaculado de María',
      sins: [
        { id: 'bm-1', description: '¿Blasfemé contra la Inmaculada Concepción?' },
        { id: 'bm-2', description: '¿Blasfemé contra la Virginidad Perpetua de Nuestra Señora?' },
        { id: 'bm-3', description: '¿Blasfemé contra la Maternidad Divina de Nuestra Señora?' },
        { id: 'bm-4', description: '¿Dejé de reconocer a Nuestra Señora como Madre de todos los hombres?' },
        { id: 'bm-5', description: '¿Intenté sembrar en los corazones de los niños indiferencia, desprecio u odio hacia Nuestra Señora?' },
        { id: 'bm-6', description: '¿Menosprecié o ridiculicé a María o a los Santos en sus santas imágenes?' },
      ],
    },
    mercyWorks: {
      name: 'Obras de Misericordia Espirituales y Corporales',
      sins: [
        { id: 'om-1', description: '¿Omití o dejé de dar buen consejo a los que pecan?' },
        { id: 'om-2', description: '¿Dejé de enseñar a los ignorantes?' },
        { id: 'om-3', description: '¿Dejé de aconsejar a los que dudan de la fe?' },
        { id: 'om-4', description: '¿Dejé de consolar a los tristes?' },
        { id: 'om-5', description: '¿Dejé de sufrir/soportar con paciencia las debilidades de mi prójimo?' },
        { id: 'om-6', description: '¿Dejé de perdonar a mis hermanos por amor a Dios?' },
        { id: 'om-7', description: '¿Dejé de rogar por los vivos y por los muertos?' },
        { id: 'om-8', description: '¿Dejé de dar de comer al hambriento?' },
        { id: 'om-9', description: '¿Dejé de dar de beber al sediento?' },
        { id: 'om-10', description: '¿Dejé de vestir al desnudo?' },
        { id: 'om-11', description: '¿Dejé de visitar a los presos?' },
        { id: 'om-12', description: '¿Dejé de ayudar o acoger a algún desamparado?' },
        { id: 'om-13', description: '¿Dejé de visitar a los enfermos?' },
        { id: 'om-14', description: '¿Dejé de enterrar a los muertos o de visitar el cementerio al menos una vez al año?' },
      ],
    },
  },

  // Artículos de Preparación
  articles: {
    whatIsSin: {
      title: '¿Qué es el Pecado?',
      content: `El concepto de pecado es bastante simple: básicamente, el pecado es un acto de egoísmo exagerado. Es preferirse a sí mismo, anteponerse a Dios y a los demás, cediendo a las pasiones desordenadas, que nos colocan en el centro de nuestra existencia, negando nuestra naturaleza, que solo se completa cuando se abre al prójimo y a Dios.

El pecado es el rechazo a establecer con Dios y con los demás una relación de amor. Es un "cerrarse a las criaturas" y "rechazar al Creador". En general, el pecador solo desea los placeres proporcionados por las criaturas, y no necesariamente quiere rechazar al Creador.

Pero, al dejarse seducir por las satisfacciones fugaces proporcionadas por las criaturas, el pecador implícitamente está actuando contra el amor del Creador, pues siente que el placer terrenal no lo llena, pero aun así no resiste a él.

Por eso, el pecado hiere al propio pecador, alejándolo de la plenitud ofrecida por Dios. Y, por eso, el pecado ofende a Dios: no porque Dios, como tal, se vea afectado, sino porque nosotros mismos, al pecar, nos disminuimos ante la grandeza que Dios nos ofrece.

Para Jesús, el pecado nace en el interior del hombre (cf. Mt 15, 10-20). Por eso, es necesaria la transformación interior, del corazón. Para Jesús, el pecado es una esclavitud: el hombre se deja en poder del maligno, valorando falsamente las cosas de este mundo, dejándose llevar por lo inmediato, por las satisfacciones sensibles, que no sacian nuestra sed de amor y de plenitud.

## ¿Qué tipos de pecado existen?

**Pecado Original:** Es la herencia que todos nosotros recibimos de nuestros primeros padres, Adán y Eva: ellos desconfiaron del amor de Dios Padre y cedieron a la tentación de dejarlo fuera de sus elecciones personales. Como hijos de una humanidad que perdió la inocencia, todos nosotros nacemos con la naturaleza caída de pecadores y necesitamos la gracia de Dios, mediante el sacramento del Bautismo, para purificar nuestra alma.

**Pecado Actual o Personal:** Es el que cometemos como individuos, voluntaria y conscientemente. Puede ser cometido de cuatro maneras:
- Con el pensamiento
- Con las palabras
- Con los actos
- Con las omisiones

Y puede ser contra Dios, contra el prójimo o contra nosotros mismos.

## Pecado Mortal y Venial

El pecado personal puede ser **mortal** o **venial**:

1. **Pecado Venial (leve):** Aquel que cometemos sin plena conciencia o sin pleno consentimiento, pero en materia leve.
2. **Pecado Mortal (grave):** Involucra tres factores simultáneos: plena conciencia, pleno consentimiento y materia grave.

## ¿Qué es materia grave y materia leve?

La "materia" es el "hecho" pecaminoso en sí.

**Materia grave:** Hiere seriamente cualquiera de los 10 mandamientos. Algunos ejemplos:
- Negar la existencia de Dios
- Ofender a Dios o a los padres
- Matar o herir gravemente a una persona
- Ponerse en grave riesgo de muerte sin razón justa
- Cometer actos impuros
- Robar objetos de valor
- Calumniar
- Cometer graves omisiones en el cumplimiento del deber
- Causar escándalo al prójimo

**Materia leve:** No hiere seriamente ninguno de los 10 mandamientos, aunque consista en un acto contrario a algunos de ellos.`,
      source: 'Aleteia',
    },
    mortalSins: {
      title: 'Pecados Mortales',
      content: `Cuando cometemos un pecado grave expulsamos a Dios de nosotros y perdemos la gracia santificante. Por eso el pecado es la desgracia mayor que existe en el mundo.

Pecar gravemente es:
- Actuar contra la voluntad de Dios
- Atentar contra su gloria
- Ofender a quien es infinitamente bueno
- Privarse de la gracia de Dios
- Someterse a la esclavitud del Diablo
- Convertirse en candidato al Infierno

## Definición

**Pecado mortal** es pensar, desear, decir, hacer, u omitir algo contra la ley de Dios en materia grave, sabiéndolo y queriéndolo.

Son necesarios tres elementos:
1. **Materia grave**
2. **Conocimiento** (saber que es pecado)
3. **Libertad** (querer hacerlo)

## Ejemplos de materia grave

- No creer algo enseñado por Dios y la Iglesia, o adorar otros dioses *(contra el 1º mandamiento)*
- Blasfemar el Santo nombre de Dios, de la Virgen y de los Santos *(contra el 2º mandamiento)*
- Faltar a la Misa de los Domingos y Fiestas de guardar, sin motivo grave *(contra el 3º mandamiento)*
- Matar, suicidarse, abortar: "crimen abominable" *(Concilio Vaticano II)*
- Consentir en malos pensamientos, deseos, miradas, conversaciones, acciones contra la pureza, contra la fidelidad, contra la transmisión de la vida
- Robar una cantidad importante
- Calumniar o difamar a una persona en algo grave`,
      source: 'Comunidad Shalom',
    },
    venialSins: {
      title: 'Pecados Veniales',
      content: `Existe otro tipo de pecado: el **pecado venial** o leve.

Este pecado:
- No priva al alma de la gracia de Dios
- No la condena al Infierno

Sin embargo:
- Impide la perfección
- Dificulta el camino del alma hacia Dios
- Lleva al vicio y a la esclavitud del pecado
- Causa relajamiento de la conciencia
- Enfría el amor por Dios
- Puede conducir a pecados más graves

## Definición

**Pecado venial** es pensar, desear, decir, hacer u omitir algo contra la ley de Dios en materia leve.

## Diferencia entre Mortal y Venial

| Pecado Mortal | Pecado Venial |
|---------------|---------------|
| Castigo: Infierno eterno | Pena: Purgatorio temporal |
| Solo se perdona con confesión (o acto de contrición perfecta con propósito de confesar) | Se perdona por el arrepentimiento sincero |

## Cómo obtener perdón del pecado venial

- Arrepentimiento sincero
- Buena obra
- Oración
- Limosna
- Agua bendita
- Señal de la cruz
- Confesión`,
      source: 'Comunidad Shalom',
    },
    tenCommandments: {
      title: 'Los Diez Mandamientos',
      content: `Los Diez Mandamientos o el Decálogo es el nombre dado al conjunto de leyes que según la Biblia, habrían sido originalmente escritos por Dios en tablas de piedra y entregados al profeta Moisés (las Tablas de la Ley).

## Los Mandamientos

**1º** - Adorar a Dios y amarlo sobre todas las cosas.

**2º** - No usar el Santo Nombre de Dios en vano.

**3º** - Santificar los Domingos y fiestas de guardar.

**4º** - Honrar padre y madre (y los otros legítimos superiores).

**5º** - No matar (ni causar otro daño, en el cuerpo o en el alma, a sí mismo o al prójimo).

**6º** - Guardar castidad en las palabras y en las obras.

**7º** - No robar (ni injustamente retener o dañar los bienes del prójimo).

**8º** - No levantar falsos testimonios (ni de cualquier otro modo faltar a la verdad o difamar al prójimo).

**9º** - Guardar castidad en los pensamientos y deseos.

**10º** - No codiciar las cosas ajenas.`,
      source: 'Wiki',
    },
    sinsVsVirtues: {
      title: 'Pecados vs Virtudes',
      content: `La Iglesia católica considera que todo ser humano es, en esencia, bueno. Por eso, para cada uno de los 7 pecados capitales, existe una virtud opuesta:

## Los 7 Pecados y sus Virtudes

| Pecado | Virtud |
|--------|--------|
| **Soberbia** | Humildad |
| **Avaricia** | Generosidad |
| **Lujuria** | Castidad |
| **Envidia** | Caridad |
| **Gula** | Templanza |
| **Ira** | Paciencia |
| **Pereza** | Diligencia |

## Reflexión

La práctica de las virtudes es el camino para vencer los vicios. No basta evitar el pecado; es necesario cultivar activamente la virtud contraria.

Por ejemplo:
- Para vencer la **soberbia**, practique actos de **humildad**
- Para vencer la **avaricia**, ejercite la **generosidad**
- Para vencer la **ira**, cultive la **paciencia**`,
      source: '',
    },
    meditation: {
      title: 'Meditación',
      content: `Creo en un Salvador que me ama, que perdona mis pecados y que me da la gracia de volverme santo. Jesucristo, a través del ministerio de Sus sacerdotes, hace ambas cosas en el Sacramento de la Penitencia.

## Palabras de la Escritura

> "Como el Padre me envió, también yo os envío... Recibid el Espíritu Santo. A quienes perdonéis los pecados, les quedan perdonados; a quienes se los retengáis, les quedan retenidos."
> — Juan 20, 21-23

> "Aunque vuestros pecados sean como la grana, quedarán blancos como la nieve."
> — Isaías 1, 18

> "No he venido a llamar a justos, sino a pecadores."
> — Mateo 9, 13

## El Poder del Sacerdote

San Juan Crisóstomo enseña:

> "Los hombres recibieron de Dios un poder que no fue dado a los ángeles ni a los arcángeles. Nunca se dijo a los espíritus celestiales: 'Lo que atéis y desatéis en la tierra quedará atado y desatado en el cielo'. Los príncipes de este mundo solo pueden atar y desatar el cuerpo. El poder del sacerdote va más allá; alcanza el alma, y se ejerce no solo en bautizar, sino aún más en perdonar los pecados."

## Consejos Prácticos

- No tengas miedo de confesar al sacerdote cualquier pecado impuro que hayas cometido
- No lo escondas ni intentes disfrazarlo
- El sacerdote está ahí para ayudar y perdonar
- Nada de lo que puedas decir lo escandalizará

**Recuerda:** Confiesa tus pecados con arrepentimiento sobrenatural, teniendo una resolución firme de no volver a pecar y de evitar situaciones que lleven al pecado.`,
      source: 'Fatima.org',
    },
    howToConfess: {
      title: 'Cómo confesarse',
      content: `## Preparación

Antes de nada, **examina bien tu conciencia**.

Luego, dile al sacerdote:
- Qué pecados específicos cometiste
- Con la mayor exactitud posible, cuántas veces los cometiste desde tu última buena confesión

## Qué confesar

Solo estás **obligado** a confesar los pecados mortales, ya que puedes obtener el perdón de los pecados veniales a través de sacrificios y actos de caridad.

> **Consejo:** Si tienes duda sobre si un pecado es mortal o venial, menciona al confesor tu duda.

La confesión de los pecados veniales también es recomendada, pues ayuda mucho a evitar el pecado y a avanzar hacia el Cielo.

## Condiciones para que un pecado sea mortal

1. **Materia seria** - el acto en sí es grave
2. **Reflexión suficiente** - saber que es pecado
3. **Pleno consentimiento** - elegir hacerlo libremente

## Avisos importantes

- **Ocultar deliberadamente** un pecado mortal invalida la confesión, y es igualmente pecado mortal
- La confesión es **privada** y sujeta al **Sigilo de la Confesión**
- Es pecado mortal que un sacerdote revele a quien sea la materia de una confesión`,
      source: 'Fatima.org',
    },
    spiritualDirection: {
      title: 'Dirección Espiritual',
      content: `Si tienes dirección espiritual, ya sabes de la importancia de esa orientación para mantener en marcha la vida interior y, en general, para progresar en la vida cristiana.

## ¿Por qué tener un director espiritual?

La Iglesia siempre ha recomendado la dirección espiritual a todos los que desean madurar seriamente en la vida cristiana, de forma análoga a:
- Un cardiaco que busca la orientación de un cardiólogo
- Un atleta que tiene un entrenador para prepararlo y orientarlo

**Nadie es buen entrenador de sí mismo.**

## Enseñanza de San Josemaría Escrivá

> "Conviene que conozcas esta doctrina segura: el espíritu propio es mal piloto, para dirigir el alma en las borrascas y tempestades, por entre los escollos de la vida interior. Por eso, es voluntad de Dios que la dirección de la nave esté entregada a un Maestro, para que, con su luz y conocimiento, nos conduzca a puerto seguro."
> — Camino, n. 59

## El Buen Pastor

El confesor y, en general, la persona que atiende la dirección espiritual de otros, participa de la misión del Buen Pastor:

- Conoce a sus ovejas y ellas lo conocen
- Va indicándoles el camino
- Conduce a buenos pastos
- Defiende de los ladrones y del lobo (cf. Jn 10, 4-14)
- Busca a las que se extraviaron para ayudarlas a volver (cf. Lc 15, 4-7)

## Cómo elegir un director

El buen director espiritual debe ser un reflejo de Jesús, el Buen Pastor.

**Importante:** Pide luces al Espíritu Santo para elegir bien al director — siempre con plena libertad, pero con el deseo sincero de avanzar espiritualmente.`,
      source: 'Padre Francisco Faus',
    },
    spiritualAdvice: {
      title: 'Consejos Espirituales',
      content: `> "No existen personas fuertes o débiles: existen personas que oran y personas que no oran."

San Agustín dijo que quien reza bien, vive bien; quien vive bien, muere bien; y para quien muere bien, todo está bien.

San Alfonso enseña: *"Quien ora mucho será salvado. Quien ora poco, pone en riesgo su propia salvación eterna."*

## 10 Consejos para crecer en la oración

### 1. Ten convicción y determinación
Nadie tiene éxito en ningún ámbito de la vida sin determinación. Atletas, músicos, estudiosos no llegaron donde llegaron solo por desear.

### 2. Contrata al Espíritu Santo como maestro
San Pablo nos enseña que no sabemos pedir como conviene, y que es el Espíritu Santo quien intercede por nosotros. Antes de comenzar cualquier momento de oración, invoca al Espíritu Santo para iluminar tu mente e incendiar tu corazón.

### 3. Dedica tiempo, espacio, buena voluntad y silencio
Como cualquier arte se aprende con la práctica, esto también se aplica a la oración. Elige un momento determinado, un buen lugar, pon lo mejor de tu parte y haz silencio interior.

### 4. Haz penitencia
Si tu oración se ha vuelto aburrida y ya no estás creciendo espiritualmente, puede deberse al descuido en la vida de penitencia. Consulta a un buen director espiritual y comienza con pequeños actos.

### 5. Busca la dirección espiritual
Los atletas necesitan entrenadores; los estudiantes necesitan profesores. Los guerreros de la oración necesitan un orientador.

### 6. Haz oración y vive la acción
Una auténtica vida de oración alcanza su plenitud en la progresiva práctica de las virtudes: fe, esperanza, caridad, pureza, bondad, servicio, humildad.

### 7. Estudia y lee sobre la oración
Santa Teresa de Ávila no aceptaba monjas para su convento que no supieran leer. La santa sabía cuán importante es aprender sobre la oración por medio de lectura espiritual sólida.

### 8. Participa en retiros
Los retiros permiten una dedicación más prolongada a la oración. Uno de los estilos más eficaces son los retiros ignacianos.

### 9. Confiésate regularmente
A veces la oración se vuelve muy difícil porque tenemos la conciencia sucia por el pecado. Jesús dijo: *"Bienaventurados los limpios de corazón, porque ellos verán a Dios"* (Mt 5, 8).

### 10. Cuenta con Nuestra Señora
Después de invocar al Espíritu Santo, pide la intercesión de María por ti, e invítala a estar a tu lado cada vez que dedicas un tiempo a la oración. **Ella nunca falla.**`,
      source: 'Aleteia.org',
    },
  },
};
