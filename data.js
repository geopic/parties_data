const nations = [
  {
    name: 'United Kingdom',
    code: 'UKG',
    demonym: 'British',
    system: 'Constitutional Monarchy',
    parties: {
      'CON': 'Conservative Party',
      'SOC': 'Labour Party',
      'NAT': null,
      'LIB': 'Liberal Democrats',
    },
    single_issue_parties: {
      'SNP': ['Scottish National Party', 'Scottish Independence'],
      'UKP': ['UK Independence Party', 'Euroscepticism'],
      'PCY': ['Plaid Cymru', 'Welsh Independence']
    },
    extreme_parties: {
      'COM': 'Communist Party of Britain',
      'FAC': null
    }
  },
  {
    name: 'France',
    code: 'FRA',
    demonym: 'French',
    system: 'Dual Executive',
    parties: {
      'LIB': 'La République En Marche!',
      'NAT': 'Rassemblement National',
      'SOC': 'Parti Socialiste',
      'CON': 'Debout la France',
    },
    single_issue_parties: null,
    extreme_parties: {
      'COM': 'Parti Communiste Français',
      'FAC': null
    }
  },
  {
    name: 'Germany',
    code: 'GER',
    demonym: 'German',
    system: 'Federal Republic',
    parties: {
      'CON': 'CDU/CSU',
      'SOC': 'Sozialdemokratische Partei',
      'NAT': 'Alternative für Deutschland',
      'LIB': 'Freie Demokratische Partei',
    },
    single_issue_parties: {
      'DLI': ['Die Linke', 'Anti-Capitalism'],
      'GRN': ['Grüne', 'Environmentalism']
    },
    extreme_parties: {
      'COM': 'Deutsche Kommunistische Partei',
      'FAC': 'Nationaldemokratische Partei'
    }
  },
  {
    name: 'Spain',
    code: 'SPA',
    demonym: 'Spanish',
    system: 'Constitutional Monarchy',
    parties: {
      'CON': 'Partido Popular',
      'SOC': 'Partido Socialista Obrero',
      'NAT': 'España 2000'
    },
    single_issue_parties: {
      'CIT': ['Ciudadanos', 'Catalonia: Spanish'],
      'ERC': ['Esquerra Republicana de Catalunya', 'Catalonia: Catalan']
    },
    extreme_parties: {
      'COM': 'Partido Comunista',
      'FAC': 'Democracia Nacional'
    }
  }
]