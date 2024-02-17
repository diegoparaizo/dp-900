var $progressValue = 0;
var resultList=[];

const quizdata=[
      {
        question:"VERDADEIRO ou FALSO: você pode criar vários índices clusterizados para uma tabela",
        options:["VERDADEIRO", "FALSO"],
        answer:"FALSO",
        category:1
      },
      {
        question:"O Azure Synapse Analytics dá suporte ao processamento paralelo de dados usando:",
        options:["Máquinas de nó único de alto desempenho", "Dividir o processamento em vários nós de computação", "Não suporta processamento paralelo"],
        answer:"Dividir o processamento em vários nós de computação",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: os dados armazenados no armazenamento redundante da Zona de Armazenamento do Azure (ZRS) são replicados em várias zonas de disponibilidade",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: os dados armazenados no Azure Blob Storage usando a camada de arquivo têm baixo custo de armazenamento e alto custo de recuperação",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"A instalação manual de um banco de dados SQL Server na máquina virtual do Windows é classificada como ______________.",
        options:["Software como Serviço (SaaS)", "Plataforma como serviço (PaaS)", "Infraestrutura como serviço (IaaS)", "Solução Híbrida"],
        answer:"Infraestrutura como serviço (IaaS)",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: o Administrador do Banco de Dados é responsável por atualizar manualmente o Sistema Operacional do Banco de Dados SQL Server em uma Máquina Virtual Windows",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"Supondo que course seja um nome de tabela e user1 seja um usuário de banco de dados, 'GRANT SELECT ON course TO user1' é um exemplo de:",
        options:["Linguagem de Manipulação de Dados (DML)", "Linguagem de definição de dados (DDL)", "Linguagem de consulta de dados (DQL)", "Linguagem de controle de dados (DCL)"],
        answer:"Linguagem de controle de dados (DCL)",
        category:1
      },
      {
        question:"'CREATE DATABASE yourtestdb' é um exemplo de:",
        options:["Linguagem de Manipulação de Dados (DML)", "Linguagem de definição de dados (DDL)", "Linguagem de consulta de dados (DQL)", "Linguagem de controle de dados (DCL)"],
        answer:"Linguagem de definição de dados (DDL)",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: a API de tabela do Azure Cosmos DB dá suporte a réplicas de leitura e gravações multirregionais",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: o Azure Data Lake Storage permite a hierarquia em nível de pasta",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"Na página IAM, você pode ver as atribuições de funções. Estes mostram: 1. Quem (ou que objeto) é você, 2. O objeto ao qual você deseja acessar e  3. Quanto acesso você deve ter. Qual é o “Escopo”?",
        options:["O objeto ao qual você deseja acessar", "Quanto acesso você deve ter", "Quem (ou que objeto) é você."],
        answer:"O objeto ao qual você deseja acessar",
        category:1
      },
      {
        question:"Qual destes descreve um objeto de dados relacionais que armazena dados usando linhas e colunas?",
        options:["Uma visao", "Um indice", "Uma procedimento(procedure)", "Uma tabela"],
        answer:"Uma tabela",
        category:1
      },
      {
        question:"O que é armazenamento localmente redundante?",
        options:["É onde os dados são copiados aproximadamente na mesma área física.", "É onde os dados são copiados em diversas regiões.", "É onde os dados são copiados em outra região."],
        answer:"É onde os dados são copiados aproximadamente na mesma área física.",
        category:1
      },
      {
        question:"Que tipo de blob é bom para gravar logs da web.",
        options:["Blobs de páginas.(Blobs pages)", "Bloquear bolhas.(Block blobs)", "Anexar blobs.(Append blobs)"],
        answer:"Anexar blobs.(Append blobs)",
        category:1
      },
      {
        question:"No Azure Databricks, em que é criado o código Spark?",
        options:["Oleodutos(Pipelines)", "Cadernos(Notebooks)", "Fluxo(Stream)", "Lote(Batch)"],
        answer:"Cadernos(Notebooks)",
        category:1
      },
      {
        question:"O que é streaming estruturado Spark?",
        options:["Permite fazer cálculos para um pequeno número de linhas e atualizar os resultados.", "Processa dados enormes rapidamente.", "Constrói modelos tabulares para suportar processamento OLAP (analítico).", "Extrai dados, transforma-os e carrega-os para um destino."],
        answer:"Permite fazer cálculos para um pequeno número de linhas e atualizar os resultados.",
        category:1
      },
      {
        question:"Tenho alguns dados que desejo armazenar como um Blob. Como acesso esse blob várias vezes ao dia, quero o custo mais barato para ele. Qual nível de acesso devo usar?",
        options:["Arquivar", "Legal", "Quente"],
        answer:"Quente",
        category:1
      },
      {
        question:"O que é OLTP?",
        options:["É um exemplo de data warehouse.", "É um banco de dados usado para salvar transações.", "É um protocolo de rede.", "É a linguagem de consulta do SQL Server, utilizando a instrução SELECT."],
        answer:"É um banco de dados usado para salvar transações.",
        category:1
      },
      {
        question:"Qual destas opções descreve o objetivo principal de usar o Power BI com um sistema OLAP?",
        options:["Transformação de Dados", "Processamento de dados", "Visualização de dados", "Ingestão de dados"],
        answer:"Visualização de dados",
        category:1
      },
      {
        question:"Quais destes são otimizados para análise de log, telemetria de consulta e dados de log para obter insights?",
        options:["Explorador de dados do Azure Synapse", "Análise do Azure Synapse", "Fábrica de Dados Azure", "Azure HDInsight"],
        answer:"Explorador de dados do Azure Synapse",
        category:1
      },
      {
        question:"Qual das opções a seguir criptografa dados em repouso?",
        options:["Criptografia Transparente de Dados (TDE)", "Mascaramento dinâmico de dados", "Segurança da Camada de Transporte (TLS)", "Sempre criptografado"],
        answer:"Criptografia Transparente de Dados (TDE)",
        category:1
      },
      {
        question:"Você precisa processar dados do mercado de ações em tempo real. Que tipo de processamento é esse?",
        options:["OLTP", "OLAP", "Transmissão de dados", "Dados em lote"],
        answer:"Transmissão de dados",
        category:1
      },
      {
        question:"Qual API não relacional usa dados gráficos?",
        options:["API Cassandra", "API Gremlin", "API SQL", "API de tabela", "API MongoDB"],
        answer:"API Gremlin",
        category:1
      },
      {
        question:"O que é uma chave primária?",
        options:["Um objeto que reordena as linhas de uma tabela.", "Uma instrução SELECT encapsulada", "Um objeto que armazena múltiplas linhas e colunas.", "Uma coluna que identifica exclusivamente uma linha específica."],
        answer:"Uma coluna que identifica exclusivamente uma linha específica.",
        category:1
      },
      {
        question:"Como você move dados de um MariaDB local para o Banco de Dados do Azure para MariaDB?",
        options:["pgAdmin", "Serviço de Migração de Banco de Dados do Azure", "SQL Server Management Studio"],
        answer:"Serviço de Migração de Banco de Dados do Azure",
        category:1
      },
      {
        question:"Selecione três motivos para usar a normalização.",
        options:["Simplifica consultas; Reduz dados duplicados; Reduz a chance de dados inconsistentes", "Permite o uso de índices não clusterizados; Reduz dados duplicados; Simplifica consultas", "Reduz o número de tabelas usadas; Força uma coluna a ter um tipo de dados específico; Reduz a chance de dados inconsistentes"],
        answer:"Simplifica consultas; Reduz dados duplicados; Reduz a chance de dados inconsistentes",
        category:1
      },
      {
        question:"Quando escrevo uma instrução SQL, qual é a ordem das seis cláusulas principais SQL?",
        options:["FROM, ORDER BY, SELECT, WHERE, GROUP BY, HAVING", "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY", "FROM, WHERE, GROUP BY, HAVING, ORDER BY, SELECT", "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY"],
        answer:"SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
        category:1
      },
      {
        question:"O SQL Server na Máquina Virtual do Azure é um exemplo de...?",
        options:["IaaS", "SaaS", "PaaS"],
        answer:"IaaS",
        category:1
      },
      {
        question:"Em dados não relacionais, qual das afirmações a seguir é verdadeira?",
        options:["Cada linha pode ter um esquema diferente.", "Cada linha possui o mesmo número de colunas.", "As tabelas podem ser relacionadas entre si usando Chaves Primárias e Chaves Estrangeiras"],
        answer:"Cada linha pode ter um esquema diferente.",
        category:1
      },
      {
        question:"A qual porta o PostgreSQL precisa acessar?",
        options:["1433", "3306", "5432"],
        answer:"5432",
        category:1
      },
      {
        question:"Qual é a definição de banco de dados distribuído (em outras palavras, o que é verdade sobre um banco de dados distribuído que não é verdade em um banco de dados não distribuído)?",
        options:["Permite múltiplos usuários.", "Os dados são armazenados em diferentes locais físicos.", "Utiliza dados semiestruturados.", "Interrompe ataques DoS."],
        answer:"Os dados são armazenados em diferentes locais físicos.",
        category:1
      },
      {
        question:"De quem é geralmente a responsabilidade de criar pipelines Extract-Transform-Load, também conhecidos como pipelines de ingestão de dados?",
        options:["Administradores de banco de dados", "Analistas de dados", "Engenheiros de dados"],
        answer:"Engenheiros de dados",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: Prefira bancos de dados relacionais quando forem necessárias fortes garantias de consistência transacional",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"Você está configurando um novo banco de dados SQL Server no Azure. Você deseja minimizar as despesas operacionais. Quais destes bancos de dados do Azure você recomendaria?",
        options:["API MongoDB do Azure Cosmos DB", "Armazenamento de Tabelas do Azure", "SQL Server em máquina virtual Windows", "Banco de dados SQL do Azure"],
        answer:"Banco de dados SQL do Azure",
        category:1
      },
      {
        question:"Você tem a obrigação de manter seus arquivos por um período de 5 anos. Esses arquivos raramente serão acessados. Qual nível de armazenamento você recomendaria para manter seus custos baixos?",
        options:["Quente", "Frio", "Arquivar"],
        answer:"Arquivar",
        category:1
      },
      {
        question:"Seu aplicativo precisa armazenar dados não estruturados, como imagens e vídeos. Que tipo de armazenamento de dados você recomenda?",
        options:["Valor chave", "Colunar", "Documento", "Armazenamento de objetos"],
        answer:"Armazenamento de objetos",
        category:1
      },
      {
        question:"Qual destes é um banco de dados de família de colunas?",
        options:["Azure Cosmos DB MongoDB", "Azure Cosmos DB Cassandra", "Gremlin do Cosmos Azul", "Armazenamento de Tabelas do Azure"],
        answer:"Azure Cosmos DB Cassandra",
        category:1
      },
      {
        question:"Um gráfico de barras que mostra as vendas acumuladas no ano por região é um exemplo de que tipo de análise?",
        options:["preditivo", "prescritivo", "descritivo", "diagnóstico"],
        answer:"diagnóstico",
        category:1
      },
      {
        question:"Você precisa realizar consultas híbridas de processamento transacional e analítico (HTAP) em fontes de dados do Azure Cosmos DB usando o Azure Synapse Analytics. O que você deve usar?",
        options:["Pipelines de sinapse", "um pool SQL do Synapse", "Link de Sinapse", "Estúdio Sinapse"],
        answer:"Link de Sinapse",
        category:1
      },
      {
        question:"Você precisa criar uma visualização dos totais de vendas correntes por trimestre, conforme mostrado na figura a seguir. O que você deve criar no Power BI Desktop?",
        options:["gráfico em cascata", "um gráfico de faixa de opções", "um gráfico de barras", "uma árvore de decomposição"],
        answer:"gráfico em cascata",
        category:1
      },
      {
        question:"Você precisa armazenar dados usando o armazenamento de Tabelas do Azure. O que você deve criar primeiro?",
        options:["an Azure Cosmos DB instance", "a storage account", "a blob container", "a table"],
        answer:"a storage account",
        category:1
      },
      {
        question:"Você precisa recomendar um serviço de armazenamento de dados que atenda aos seguintes requisitos: -> Acesso API SQL nativo -> Índices configuráveis O que você deve recomendar?",
        options:["Arquivos do Azure", "Armazenamento de Blobs do Azure", "Armazenamento de Tabelas do Azure", "Azure Cosmos DB"],
        answer:"Azure Cosmos DB",
        category:1
      },
      {
        question:"Sua empresa precisa projetar um banco de dados que ilustre as relações entre os níveis de utilização de dispositivos de rede individuais em uma rede local. Que tipo de armazenamento de dados você deve usar?",
        options:["gráfico", "chave/valor", "documento", "colunar"],
        answer:"gráfico",
        category:1
      },
      {
        question:"Você gerencia um aplicativo que armazena dados em uma pasta compartilhada em um servidor Windows. Você precisa mover a pasta compartilhada para o Armazenamento do Azure. Que tipo de armazenamento do Azure você deve usar?",
        options:["queue", "blob", "file", "table"],
        answer:"file",
        category:1
      },
      {
        question:"Sua empresa está projetando um banco de dados que conterá dados de sessão de um site. Os dados incluirão notificações, atributos de personalização e produtos adicionados a um carrinho de compras. Qual tipo de armazenamento de dados fornecerá a menor latência para recuperar os dados?",
        options:["chave/valor", "gráfico", "colunar", "documento"],
        answer:"colunar",
        category:1
      },
      {
        question:"Você tem um aplicativo executado no Windows e requer acesso a uma unidade mapeada. Qual serviço do Azure você deve usar?",
        options:["Arquivos do Azure", "Armazenamento de Blobs do Azure", "Azure Cosmos DB", "Armazenamento de Tabelas do Azure"],
        answer:"Arquivos do Azure",
        category:1
      },
      {
        question:"Sua empresa está projetando um aplicativo que gravará um grande volume de dados JSON e terá um esquema definido pelo aplicativo. Que tipo de armazenamento de dados você deve usar?",
        options:["colunar", "chave/valor", "documento", "gráfico"],
        answer:"chave/valor",
        category:1
      },
      {
        question:"Você precisa recomendar um armazenamento de dados não relacional otimizado para armazenar e recuperar arquivos de texto, vídeos, fluxos de áudio e imagens de disco virtual. O armazenamento de dados deve armazenar dados, alguns metadados e um ID exclusivo para cada arquivo. Que tipo de armazenamento de dados você deve recomendar?",
        options:["chave/valor", "colunar", "objeto", "documento"],
        answer:"objeto",
        category:1
      },
      {
        question:"Sua empresa está projetando um armazenamento de dados para sensores de temperatura conectados à Internet. Os dados coletados serão usados ​​para analisar tendências de temperatura. Que tipo de armazenamento de dados você deve usar?",
        options:["relational", "time series", "graph", "columnar"],
        answer:"time series",
        category:1
      },
      {
        question:"Você precisa coletar dados de telemetria em tempo real de um aplicativo móvel. Que tipo de carga de trabalho descreve esse cenário?",
        options:["Processamento de transações online (OLTP)", "batch", "Processamento Massivamente Paralelo (MPP)", "streaming"],
        answer:"streaming",
        category:1
      },
      {
        question:"Você tem um pool SQL dedicado no Azure Synapse Analytics que só é usado ativamente todas as noites durante oito horas. Você precisa minimizar o custo do pool SQL dedicado tanto quanto possível durante os tempos ociosos. A solução deve garantir que os dados permaneçam intactos. O que você deve fazer no pool SQL dedicado?",
        options:["Reduza as unidades de data warehouse (DWUs).", "Pause the pool.", "Crie um ponto de restauração definido pelo usuário.", "Excluir o pool"],
        answer:"Pause the pool.",
        category:1
      },
      {
        question:"Qual componente do Azure Data Factory inicia a execução de um pipeline?",
        options:["fluxo de controle", "um gatilho", "um parâmetro", "uma atividade"],
        answer:"um gatilho",
        category:1
      },
      {
        question:"Sua empresa possui uma solução de relatórios que possui relatórios paginados. Os relatórios consultam um modelo dimensional em um data warehouse. Que tipo de processamento a solução de relatórios usa?",
        options:["processamento de fluxo", "processamento em lote", "Processamento Analítico Online (OLAP)", "Processamento de transações online (OLTP)"],
        answer:"Processamento Analítico Online (OLAP)",
        category:1
      },
      {
        question:"Você precisa desenvolver uma solução para fornecer dados aos executivos. A solução deve fornecer uma interface gráfica interativa, representar vários indicadores-chave de desempenho e oferecer suporte à exploração de dados por meio de detalhamento. O que você deve usar no Microsoft Power BI?",
        options:["uma visão", "um relatório", "um fluxo de dados", "Microsoft Power Apps"],
        answer:"um relatório",
        category:1
      },
      {
        question:"Você tem um aplicativo de garantia de qualidade que lê dados de um data warehouse. Que tipo de processamento o aplicativo usa?",
        options:["Processamento de transações online (OLTP)", "processamento em lote", "Processamento Analítico Online (OLAP)", "processamento de fluxo"],
        answer:"Processamento de transações online (OLTP)",
        category:1
      },
      {
        question:"Qual componente do Azure Data Factory fornece o ambiente de computação para atividades?",
        options:["Pacotes SSIS", "um tempo de execução de integração", "um fluxo de controle", "um gasoduto"],
        answer:"um tempo de execução de integração",
        category:1
      },
      {
        question:"Você precisa usar o Transact-SQL para consultar arquivos no Azure Data Lake Storage Gen 2 de um data warehouse do Azure Synapse Analytics. O que você deve usar para consultar os arquivos?",
        options:["Funções do Azure", "Serviços de integração do Microsoft SQL Server (SSIS)", "PoliBase", "Fábrica de Dados do Azure"],
        answer:"PoliBase",
        category:1
      },
      {
        question:"Qual é o objetivo principal de um data warehouse?",
        options:["para fornecer respostas a consultas complexas que dependem de dados de múltiplas fontes", "para fornecer serviços de transformação entre armazenamentos de dados de origem e de destino", "para fornecer armazenamento somente leitura de dados históricos relacionais e não relacionais", "para fornecer armazenamento para aplicativos transacionais de linha de negócios (LOB)"],
        answer:"para fornecer armazenamento somente leitura de dados históricos relacionais e não relacionais",
        category:1
      },
      {
        question:"O que você deve usar para criar um relatório paginado do Microsoft Power BI?",
        options:["Carticulador", "Power BI Desktop", "o serviço Power BI", "Construtor de relatórios do Power BI"],
        answer:"Construtor de relatórios do Power BI",
        category:1
      },
      {
        question:"Qual cenário é um exemplo de carga de trabalho de streaming?",
        options:["envio de transações com mais de um mês para um arquivo", "envio de transações diariamente a partir de dispositivos de ponto de venda (POS)", "envio de dados de telemetria de dispositivos de ponta", "envio de metadados de infraestrutura em nuvem a cada 30 minutos"],
        answer:"envio de dados de telemetria de dispositivos de ponta",
        category:1
      },
      {
        question:"Você tem um banco de dados SQL do Azure que pode ser acessado diretamente da Internet. Você alterou recentemente o endereço IP público do seu computador. Após alterar o endereço IP, você não poderá mais acessar o banco de dados. Você pode conectar-se a outros recursos no Azure. Qual é a possível causa do problema??",
        options:["controle de acesso baseado em função (RBAC)", "Protocolo de configuração dinâmica de host (DHCP)", "Serviço de Nome de Domínio (DNS)", "um firewall em nível de banco de dados"],
        answer:"um firewall em nível de banco de dados",
        category:1
      },
      {
        question:"Qual ferramenta de linha de comando você pode usar para consultar bancos de dados SQL do Azure?",
        options:["sqlcmd", "bcp", "azdata", "Azure CLI"],
        answer:"sqlcmd",
        category:1
      },
      {
        question:"Qual afirmação é um exemplo de linguagem de definição de dados (DDL)?",
        options:["SELECT", "JOIN", "UPDATE", "CREATE"],
        answer:"DROP",
        category:1
      },
      {
        question:"Você está implantando um aplicativo de software como serviço (SaaS) que requer um banco de dados relacional para processamento de transações online (OLTP). Qual serviço do Azure você deve usar para dar suporte ao aplicativo?",
        options:["Azure Cosmos DB", "Azure HDInsight", "Banco de dados SQL do Azure", "Análise do Azure Synapse"],
        answer:"Banco de dados SQL do Azure",
        category:1
      },
      {
        question:"Ao criar um banco de dados SQL do Azure, qual conta sempre pode se conectar ao banco de dados?",
        options:["a conta do Azure Active Directory (Azure AD) que criou o banco de dados", "a conta de login de administrador do servidor lógico", "conta de administrador do Azure Active Directory (Azure AD)", "a conta sa"],
        answer:"a conta de login de administrador do servidor lógico",
        category:1
      },
      {
        question:"Qual afirmação é um exemplo de linguagem de definição de dados (DDL)?",
        options:["SELECT", "INSERT", "DELETE", "DROP"],
        answer:"DROP",
        category:1
      },
      {
        question:"Uma equipe de desenvolvedores possui computadores que executam Windows 10 e Ubuntu Desktop. Os desenvolvedores precisam se conectar e consultar um banco de dados SQL do Azure em cada um dos seus computadores. Os desenvolvedores exigem recursos de assistência de código, como IntelliSense. O que os desenvolvedores devem usar?",
        options:["sqlcmd", "Microsoft SQL Server Management Studio (SSMS)", "Azure Data Studio", "Azure Data Explorer"],
        answer:"Azure Data Studio",
        category:1
      },
      {
        question:"Você precisa garantir que os usuários usem a autenticação multifator (MFA) ao se conectarem a um banco de dados SQL do Azure. Que tipo de autenticação você deve usar?",
        options:["autenticação principal de serviço", "Autenticação do Azure Active Directory (Azure AD)", "Autenticação SQL", "autenticação de certificado"],
        answer:"Autenticação do Azure Active Directory (Azure AD)",
        category:1
      },
      {
        question:"Qual é a vantagem de hospedar um banco de dados na instância gerenciada do Azure SQL em comparação com um banco de dados SQL do Azure?",
        options:["alta disponibilidade integrada", "suporte nativo para consultas e transações entre bancos de dados", "backups automáticos iniciados pelo sistema", "suporte para criptografia em repouso"],
        answer:"suporte nativo para consultas e transações entre bancos de dados",
        category:1
      },
      {
        question:"Você precisa projetar e modelar um banco de dados usando uma ferramenta gráfica que ofereça suporte ao desenvolvimento de banco de dados offline orientado a projetos. O que você deve usar?",
        options:["Ferramentas de dados do Microsoft SQL Server (SSDT)", "Microsoft SQL Server Management Studio (SSMS)", "Blocos de dados do Azure", "Estúdio de Dados Azure"],
        answer:"Ferramentas de dados do Microsoft SQL Server (SSDT)",
        category:1
      },
      {
        question:"Você tem um aplicativo transacional que armazena dados em uma instância gerenciada do Azure SQL. Quando você deve implementar uma réplica de banco de dados somente leitura?",
        options:["Você precisa gerar relatórios sem afetar a carga de trabalho transacional.", "Você precisa auditar o aplicativo transacional.", "Você precisa implementar alta disponibilidade no caso de uma interrupção regional.", "Você precisa melhorar o objetivo do ponto de recuperação (RPO)."],
        answer:"Você precisa gerar relatórios sem afetar a carga de trabalho transacional.",
        category:1
      },
      {
        question:"Qual cláusula você deve usar em uma instrução SELECT para combinar linhas de uma tabela com linhas de outra tabela?",
        options:["SET", "VALUES", "KEY", "JOIN"],
        answer:"JOIN",
        category:1
      },
      {
        question:"A sua empresa precisa de garantir que uma máquina virtual do Azure pode ligar-se a bases de dados SQL do Azure sem expor as bases de dados à Internet. O que você deve usar?",
        options:["Gateway de Aplicativo do Azure", "Gerenciador de Tráfego do Azure", "DNS do Azure", "Link Privado do Azure"],
        answer:"Link Privado do Azure",
        category:1
      },
      {
        question:"Qual configuração só pode ser definida durante a criação de uma conta do Azure Cosmos DB?",
        options:["edundância geográfica", "gravações multirregionais", "tipo de conta de produção ou não produção", "API"],
        answer:"API",
        category:1
      },
      {
        question:"Qual solução de armazenamento oferece suporte ao controle de acesso baseado em função (RBAC) no nível de arquivos e pastas?",
        options:["Armazenamento em disco do Azure", "Armazenamento do Lago de Dados do Azure", "Armazenamento de Blobs do Azure", "Armazenamento de fila do Azure"],
        answer:"Armazenamento do Lago de Dados do Azure",
        category:1
      },
      {
        question:"Você precisa armazenar dados no armazenamento de Blobs do Azure por sete anos para atender aos requisitos de conformidade da sua empresa. O tempo de recuperação dos dados não é importante. A solução deve minimizar os custos de armazenamento. Qual camada de armazenamento você deve usar?",
        options:["Arquivo", "Quente", "Legal"],
        answer:"Arquivo",
        category:1
      },
      {
        question:"Que tipo de armazenamento de dados não relacional oferece suporte a um esquema flexível, armazena dados como arquivos JSON e armazena todos os dados de uma entidade no mesmo documento?",
        options:["documento", "colunar", "gráfico", "série temporal"],
        answer:"documento",
        category:1
      },
      {
        question:"Ao provisionar uma conta do Azure Cosmos DB, qual recurso fornece redundância dentro de uma região do Azure?",
        options:["replicação multimestre", "Zonas de disponibilidade", "o forte nível de consistência", "failover automático"],
        answer:"Zonas de disponibilidade",
        category:1
      },
      {
        question:"Qual é o benefício da API de tabela do Azure Cosmos DB em comparação com o armazenamento de tabelas do Azure?",
        options:["fornece resiliência se uma região do Azure falhar", "suporta particionamento", "fornece uma maior capacidade de armazenamento", "suporta um modelo multimestre"],
        answer:"suporta um modelo multimestre",
        category:1
      },
      {
        question:"Sua empresa precisa projetar um banco de dados que mostre como as alterações no tráfego de rede em uma área da rede afetam o tráfego de rede em outras áreas da rede. Que tipo de armazenamento de dados você deve usar?",
        options:["gráfico", "chave/valor", "documento", "colunar"],
        answer:"gráfico",
        category:1
      },
      {
        question:"__________ permite unir dados de uma instância do SQL Server usando T-SQL com dados externos, como SQL Server, Oracle, Teradata, MongoDB, cluster Hadoop",
        options:["PoliBase", "Estúdio de Dados Azure"],
        answer:"PoliBase",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: No Power BI - os painéis contêm visualizações de vários relatórios E podem ser compartilhados com outros usuários",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"No Power BI - Dashboard pode ser criado usando ______________.",
        options:["Power BI Desktop", "Criador de relatórios do Power BI", "Planilha Excel", "Serviço Power BI"],
        answer:"Serviço Power BI",
        category:1
      },
      {
        question:"No Power BI - os relatórios paginados são criados usando:",
        options:["Power BI Desktop", "Criador de relatórios do Power BI", "Planilha Excel", "Power BI como serviço"],
        answer:"Criador de relatórios do Power BI",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: o esquema STAR é desnormalizado e mais fácil de consultar",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"VERDADEIRO OU FALSO: O esquema do modelo de dados usado com mais frequência para análise de dados (em um data warehouse) é ________________",
        options:["Esquema Estrela", "Modelo de dados transacionais", "Dimensão", "Nenhuma das acima"],
        answer:"Esquema Estrela",
        category:1
      },
      {
        question:"Qual cláusula você deve usar em uma instrução SELECT para combinar linhas de uma tabela com linhas de outra tabela?",
        options:["VERDADEIRO", "FALSO"],
        answer:"FALSO",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: o Azure Table Storage dá suporte a gravações multirregionais",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: a Conta de Armazenamento do Azure dá suporte ao controle de acesso baseado em função no nível de pasta e arquivo apenas para o Azure Data Lake Storage",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"VERDADEIRO ou FALSO: o banco de dados Gremlin API Graph do Azure Cosmos DB pode ser consultado usando a linguagem Gremlin",
        options:["VERDADEIRO", "FALSO"],
        answer:"VERDADEIRO",
        category:1
      },
      {
        question:"Qual é uma característica do processamento em lote(batch)?",
        options:["Os dados ingeridos durante o processamento em lote devem ser processados ​​assim que os dados forem recebidos.", "Grandes conjuntos de dados devem ser divididos em lotes de menos de 1 GB antes que os dados possam ser processados.", "Há um atraso perceptível entre a ingestão de dados e a obtenção dos resultados do processamento de dados.", "O processamento em lote só pode processar dados estruturados."],
        answer:"O processamento em lote só pode processar dados estruturados.",
        category:1
      },
      {
        question:"Sua empresa precisa implementar um banco de dados relacional no Azure. A solução deve minimizar a manutenção contínua. Qual serviço do Azure você deve usar?",
        options:["Azure HDInsight", "Banco de Dados SQL do Azure", "Azure Cosmos DB", "SQL Server em Máquinas Virtuais do Azure"],
        answer:"Banco de Dados SQL do Azure",
        category:1
      },
      {
        question:"Você está escrevendo um conjunto de consultas SQL que os administradores usarão para solucionar problemas de um banco de dados SQL do Azure. Você precisa incorporar documentos e resultados de consultas em um notebook SQL. O que você deve usar?",
        options:["Microsoft SQL Server Management Studio (SSMS)", "Azure Data Studio", "CLI do Azure", "Azure PowerShell"],
        answer:"Azure Data Studio",
        category:1
      },
      {
        question:"Você tem um aplicativo de comércio eletrônico que lê e grava dados em um banco de dados SQL do Azure. Que tipo de processamento o aplicativo usa?",
        options:["processamento de fluxo", "processamento em lote", "Processamento Analítico Online (OLAP)", "Processamento de transações online (OLTP)"],
        answer:"Processamento de transações online (OLTP)",
        category:1
      },
      {
        question:"Quando você pode usar um modelo do Azure Resource Manager?",
        options:["para automatizar a criação de um grupo interdependente de recursos do Azure de forma repetível", "aplicar políticas do Azure para implantações multilocatários", "para provisionar assinaturas do Azure", "para controlar quais serviços e recursos os administradores e desenvolvedores podem implantar no portal do Azure"],
        answer:"para automatizar a criação de um grupo interdependente de recursos do Azure de forma repetível",
        category:1
      },
      {
        question:"Você precisa criar um recurso do Azure para armazenar dados no armazenamento da Tabela do Azure. Qual comando você deve executar?",
        options:["criação de compartilhamento de armazenamento az", "criação de conta de armazenamento az", "az cosmosdb criar", "criação de contêiner de armazenamento az"],
        answer:"criação de contêiner de armazenamento az",
        category:1
      },
      {
        question:"Você precisa modificar uma visualização em um banco de dados relacional adicionando uma nova coluna. Qual afirmação você deve usar?",
        options:["MERGE", "ALTER", "INSERT", "UPDATE"],
        answer:"ALTER",
        category:1
      },
      {
        question:"Qual solução de armazenamento do Azure fornece suporte nativo para listas de controle de acesso (ACLs) compatíveis com POSIX??",
        options:["Armazenamento de Tabelas do Azure", "Armazenamento do Lago de Dados do Azure", "Armazenamento de fila do Azure", "Arquivos do Azure"],
        answer:"Armazenamento do Lago de Dados do Azure",
        category:1
      },
      {
        question:"Que tipo de banco de dados é o Banco de Dados do Azure para PostgreSQL?",
        options:["Plataforma como serviço (PaaS)", "Infraestrutura como serviço (IaaS)", "Microsoft SQL Server", "on-premises"],
        answer:"Plataforma como serviço (PaaS)",
        category:1
      },
      {
        question:"Qual solução de armazenamento oferece suporte a listas de controle de acesso (ACLs) em nível de arquivo e pasta?",
        options:["Azure Data Lake Storage", "Armazenamento da Fila do Azure", "Armazenamento de Blobs do Azure", "Azure Cosmos DB"],
        answer:"Azure Data Lake Storage",
        category:1
      },
      {
        question:"Qual afirmação é um exemplo de linguagem de manipulação de dados (DML)?",
        options:["REVOKE", "DISABLE", "INSERT", "GRANT"],
        answer:"INSERT",
        category:1
      },
      {
        question:"Você tem uma consulta SQL que combina dados do cliente e dados do pedido. A consulta inclui colunas calculadas. Você precisa criar um objeto de banco de dados que permita que outros usuários executem novamente a mesma consulta SQL. O que você deve criar?",
        options:["um indice", "uma view", "uma função escalar", "uma tabela"],
        answer:"uma view",
        category:1
      },
      {
        question:"Qual destes representa 'Uma ou mais páginas de visualizações no Power BI'?",
        options:["Relatório", "Painel", "Conjunto de dados"],
        answer:"Relatório",
        category:1
      },
      {
        question:"Qual destas opções representa 'visualizações de página única de um ou mais relatórios'?",
        options:["Relatório", "Painel", "Conjunto de dados"],
        answer:"Painel",
        category:1
      },
      {
        question:"Qual afirmação é um exemplo de linguagem de manipulação de dados (DML)?",
        options:["REVOKE", "DISABLE", "CREATE", "UPDATE"],
        answer:"UPDATE",
        category:1
      }
    ];
/** Random shuffle questions **/
function shuffleArray(question){
   var shuffled=question.sort(function() {
    return .5 - Math.random();
 });
   return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions(){
  var questions=shuffleArray(quizdata);    
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i){

  var optionHtml='<li class="myoptions">'+
    '<input value="'+opts+'" name="optRdBtn" type="radio" id="rd_'+i+'">'+
    '<label for="rd_'+i+'">'+opts+'</label>'+
    '<div class="bullet">'+
      '<div class="line zero"></div>'+
      '<div class="line one"></div>'+
      '<div class="line two"></div>'+
      '<div class="line three"></div>'+
      '<div class="line four"></div>'+
      '<div class="line five"></div>'+
      '<div class="line six"></div>'+
      '<div class="line seven"></div>'+
    '</div>'+
  '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList){
  var ulContainer=$('<ul>').attr('id','optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer=returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question){
  $(".question").html("<h1>"+question+"</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index){ 
  var currentQuest=questions[index];  
  renderQuestion(currentQuest.question); 
  renderOptions(currentQuest.options); 
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index){
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat){
  var arrayForChart=[];
  for(var i=0; i<resultByCat.length;i++){
   arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results, wrong){
  var resultByCat = resultByCategory(results);
  var arrayForChart=correctAnswerArray(resultByCat);
  arrayForChart.push(wrong);
  return arrayForChart
}

/** percentage Calculation **/
function percentCalculation(array, total){
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/
function getPercentage(resultByCat, wrong){
  var totalNumber=resultList.length;
  var wrongAnwer=wrong;
  //var arrayForChart=genResultArray(resultByCat, wrong);
  //return percentCalculation(arrayForChart, totalNumber);
}

/** count right and wrong answer number **/
function countAnswers(results){

  var countCorrect=0, countWrong=0;

  for(var i=0;i<results.length;i++){
    if(results[i].iscorrect==true)  
        countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results){

  var categoryCount = [];
  var ctArray=results.reduce(function (res, value) {
    if (!res[value.category]) {
        res[value.category] = {
            category: value.category,
            correctanswer: 0           
        };
        categoryCount.push(res[value.category])
    }
    var val=(value.iscorrect==true)?1:0;
    res[value.category].correctanswer += val; 
    return res;
  }, {});

  categoryCount.sort(function(a,b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {

   $("#"+_cir_progress_id).find("._text_incor").html("Incorrect : "+_incorrect);
   $("#"+_cir_progress_id).find("._text_cor").html("Correct : "+_correct);

   var unchnagedPer=_upto;
   
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#"+_cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#"+_cir_progress_id).find("._cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
      //2*pi*r == 753.6 +xxx=764
        _input_percentage = (_upto / 100) * 764;
        _percentage = (_progress / 100) * 764;

        _text_percentage.html(_progress + '%');

        if (_percentage >= _input_percentage) {
             _text_percentage.html('<tspan x="50%" dy="0em">'+unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Your Score</tspan>');
            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray",_percentage + ',764');
        }
    }
}

function renderBriefChart(correct, total, incorrect){
  var percent=(100 * correct / total);
  if(Math.round(percent) !== percent) {
          percent = percent.toFixed(2);
  }

 totalPieChart(percent, '_cir_progress', correct, incorrect)
   
}
/*** render chart for result **/
function renderChart(data){
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [ "Verbal communication", 
              "Non-verbal communication", 
              "Written communication", 
              "Incorrect"
            ],
    datasets: [
                {
                 
                  data: data,
                  backgroundColor: [  '#e6ded4',
                                      '#968089',
                                      '#e3c3d4',
                                      '#ab4e6b'
                                    ],
                  borderColor: [  'rgba(239, 239, 81, 1)',
                                  '#8e3407',
                                  'rgba((239, 239, 81, 1)',
                                  '#000000'
                                ],
                  borderWidth: 1
                }
              ]
    },
    options: {
         pieceLabel: {
          render: 'percentage',
          fontColor: 'black',
          precision: 2
        }
      }
    
  });
}

/** List question and your answer and correct answer  

*****/
function getAllAnswer(results){
    var innerhtml="";
    for(var i=0;i<results.length;i++){

      var _class=((results[i].iscorrect)?"item-correct":"item-incorrect");
       var _classH=((results[i].iscorrect)?"h-correct":"h-incorrect");
      

      var _html='<div class="_resultboard '+_class+'">'+
                  '<div class="_header">'+results[i].question+'</div>'+
                  '<div class="_yourans '+_classH+'">'+results[i].clicked+'</div>';

        var html="";
       if(!results[i].iscorrect)
        html='<div class="_correct">'+results[i].answer+'</div>';
       _html=(_html+html)+'</div>';
       innerhtml+=_html;
    }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result **/
function renderResult(resultList){ 
  
  var results=resultList;
  console.log(results);
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
    
  renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult(){
   var results=resultList; 
  var countCorrect=countAnswers(results)[0], 
  countWrong=countAnswers(results)[1];
  var dataForChart=genResultArray(resultList, countWrong);
  renderChart(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length){
  var progressbarhtml=" ";
  for(var i=0;i<length;i++){
    progressbarhtml+='<div class="progress_'+(i+1)+' '+((i==0)?"active":"")+'"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
} 

/*** change progress bar when next button is clicked ***/
function changeProgressValue(){
  $progressValue+= 3;
  if ($progressValue >= 100) {
    
  } else {
    if($progressValue==99) $progressValue=100;
    $('.my-progress')
      .addClass('active');      
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}

function addClickedAnswerToResult(questions,presentIndex,clicked ){
  var correct=getCorrectAnswer(questions, presentIndex);
    var result={
      index:presentIndex,
      question:questions[presentIndex].question, 
      clicked:clicked,
      iscorrect:(clicked==correct)?true:false,
      answer:correct, 
      category:questions[presentIndex].category
    }
    resultList.push(result);

    console.log("result");
    console.log(result); 
}

$(document).ready(function() {
  
  var presentIndex=0;
   var clicked=0;

  var questions=generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click','.myoptions>input', function(e){
    clicked=$(this).val();   

    if(questions.length==(presentIndex+1)){
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else{

      $("#next").removeClass("hidden");
    }

  });

  $("#next").on('click',function(e){
    e.preventDefault();
    addClickedAnswerToResult(questions,presentIndex,clicked);

    $(this).addClass("hidden");
    
    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click',function(e){
     addClickedAnswerToResult(questions,presentIndex,clicked);
    $('.multipleChoiceQues').hide();
    $(".resultArea").show();
    renderResult(resultList);

  });

   $(".resultArea").on('click','.viewchart',function(){
      $(".resultPage2").show();
       $(".resultPage1").hide();
       $(".resultPage3").hide();
       renderChartResult();
   });

    $(".resultArea").on('click','.backBtn',function(){
      $(".resultPage1").show();
       $(".resultPage2").hide();
       $(".resultPage3").hide();
        renderResult(resultList);
   });

    $(".resultArea").on('click','.viewanswer',function(){
      $(".resultPage3").show();
       $(".resultPage2").hide();
       $(".resultPage1").hide();
        getAllAnswer(resultList);
   });

  $(".resultArea").on('click','.replay',function(){
    window.location.reload(true);
  });

});