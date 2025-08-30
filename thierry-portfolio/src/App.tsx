import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Função para scroll suave com offset personalizado
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Altura do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          
          // Animações específicas para diferentes elementos
          if (entry.target.classList.contains('item-estatistica')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 100;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
          
          if (entry.target.classList.contains('item-habilidade')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 150;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
          
          if (entry.target.classList.contains('cartao-projeto')) {
            const delay = Array.from(entry.target.parentNode!.children).indexOf(entry.target) * 200;
            (entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
          }
        }
      });
    }, observerOptions);

    // Observar elementos que devem ser animados
    const animatedElements = document.querySelectorAll('.item-estatistica, .item-habilidade, .cartao-projeto, .item-linha-tempo, .conteudo-sobre');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Header/Navigation */}
      <header className="cabecalho">
        <div className="container">
          <div className="marca-navegacao">
            <h2>Thierry Prado Guimarães</h2>
            <span>Data Engineer</span>
          </div>
          <nav className="navegacao">
            <button onClick={() => scrollToSection('inicio')} className="link-navegacao">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="link-navegacao">Sobre</button>
            <button onClick={() => scrollToSection('experiencia')} className="link-navegacao">Experiência</button>
            <button onClick={() => scrollToSection('habilidades')} className="link-navegacao">Habilidades</button>
            <button onClick={() => scrollToSection('idiomas')} className="link-navegacao">Idiomas</button>
            <button onClick={() => scrollToSection('certificacoes')} className="link-navegacao">Certificações</button>
            <button onClick={() => scrollToSection('projetos')} className="link-navegacao">Projetos</button>
            <button onClick={() => scrollToSection('contato')} className="link-navegacao">Contato</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section id="inicio" className="heroi">
          <div className="container">
            <div className="conteudo-heroi">
              <div className="texto-heroi">
                <h1>
                  Olá! Eu sou <span className="destaque">Thierry Prado Guimarães</span>
                </h1>
                <h2>Engenheiro de Dados</h2>
                <p className="descricao-heroi">
                  Profissional em transformar dados em insights valiosos através de 
                  tecnologias Azure e Power BI. Especialista em pipelines de dados, 
                  ETL e análise avançada para tomada de decisões estratégicas.
                </p>
                <button 
                  onClick={() => scrollToSection('projetos')} 
                  className="botao-cta"
                >
                  Ver Meus Projetos
                </button>
              </div>
              <div className="imagem-heroi">
                <div className="placeholder-perfil">
                  <div className="icones-tecnologia">
                    <div className="icone-tech icone-1">📊</div>
                    <div className="icone-tech icone-2">⚡</div>
                    <div className="icone-tech icone-3">🔗</div>
                    <div className="icone-tech icone-4">📈</div>
                    <div className="icone-central">💾</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="indicador-scroll" onClick={() => scrollToSection('sobre')}>
              <div className="seta-scroll">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Role para conhecer mais</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="estatisticas">
          <div className="container">
            <div className="grade-estatisticas">
              <div className="item-estatistica">
                <h3>2+</h3>
                <p>Anos de Experiência</p>
              </div>
              <div className="item-estatistica">
                <h3>15+</h3>
                <p>Projetos Concluídos</p>
              </div>
              <div className="item-estatistica">
                <h3>8+</h3>
                <p>Tecnologias</p>
              </div>
              <div className="item-estatistica">
                <h3>100%</h3>
                <p>Dedicação</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="sobre">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Sobre Mim</h2>
              <p>Conheça mais sobre minha trajetória e paixão por dados</p>
            </div>
            <div className="conteudo-sobre">
              <div className="texto-sobre">
                 <p>
                  Formando em <strong>Engenheiro de Software</strong> pela <strong>PUCPR</strong>, sou apaixonado por manipular dados brutos 
                  e transformá-los em dados que trazem insights valiosos que impulsionam decisões de negócio. 
                  Me identifiquei com a <strong>Engenharia de Dados</strong> desde o inicio da minha carreira profissional,
                  possuo experiência sólida em tecnologias Azure e forte expertise em Power BI, desenvolvendo soluções de dados 
                  escaláveis e eficientes.
                </p>
                <p>
                  Com foco em criar pipelines robustos, implementar arquiteturas de dados modernas 
                  e desenvolver dashboards interativos que facilitam a compreensão de informações complexas. 
                  Sempre busco aprender sobre tecnologias modernas para me manter atualizado e oferecer as melhores soluções.
                </p>
                
                <div className="destaques">
                  <div className="item-destaque">
                    <span className="icone-destaque">🎯</span>
                    <div>
                      <h4>Foco em Resultados</h4>
                      <p>Transformo dados em insights acionáveis para impulsionar o crescimento dos negócios</p>
                    </div>
                  </div>
                  <div className="item-destaque">
                    <span className="icone-destaque">⚡</span>
                    <div>
                      <h4>Tecnologias Modernas</h4>
                      <p>Especialista em Azure Data Factory, Databricks e Power BI para soluções escaláveis</p>
                    </div>
                  </div>
                  <div className="item-destaque">
                    <span className="icone-destaque">🚀</span>
                    <div>
                      <h4>Inovação Constante</h4>
                      <p>Sempre buscando novas formas de otimizar processos e melhorar a qualidade dos dados</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cartao-sobre">
                <h3>Minha Missão</h3>
                <p>
                  Democratizar o acesso aos dados através de soluções intuitivas e 
                  eficientes, capacitando equipes a tomar decisões baseadas em evidências 
                  e impulsionar o sucesso organizacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="experiencia">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Experiência Profissional</h2>
              <p>Minha trajetória no mundo dos dados</p>
            </div>
            
            <div className="linha-tempo">
              <div className="item-linha-tempo">
                <div className="marcador-linha-tempo"></div>
                <div className="conteudo-linha-tempo">
                  <div className="cabecalho-linha-tempo">
                    <h3>Analista de Dados</h3>
                    <span className="empresa">V4 Company</span>
                    <span className="periodo">Jul 2025 - Presente</span>
                  </div>
                  <ul className="conquistas">
                    <li>Desenvolvimento e manutenção de dashboards em Power BI para análise de KPIs empresariais</li>
                    <li>Análise de dados para suporte à tomada de decisões estratégicas</li>
                    <li>Criação de relatórios automatizados e visualizações de dados interativas</li>
                    <li>Colaboração com equipes multidisciplinares para implementação de soluções data-driven</li>
                    <li>Otimização de processos de análise e reporting, aumentando eficiência operacional</li>
                  </ul>
                  <div className="tags-tecnologia">
                    <span>Power BI</span>
                    <span>SQL</span>
                    <span>Python</span>
                    <span>Excel</span>
                    <span>DAX</span>
                  </div>
                </div>
              </div>
              
              <div className="item-linha-tempo">
                <div className="marcador-linha-tempo"></div>
                <div className="conteudo-linha-tempo">
                  <div className="cabecalho-linha-tempo">
                    <h3>Estagiário de Engenharia de Dados</h3>
                    <span className="empresa">BRF S.A.</span>
                    <span className="periodo">Ago 2023 - Jul 2025</span>
                  </div>
                  <ul className="conquistas">
                    <li>Apoio no desenvolvimento de pipelines de dados para processamento de informações empresariais</li>
                    <li>Participação em projetos de ETL utilizando ferramentas Azure</li>
                    <li>Criação e manutenção de relatórios e dashboards em Power BI</li>
                    <li>Análise e tratamento de dados para suporte a diferentes áreas de negócio</li>
                    <li>Colaboração em projetos de migração e modernização de sistemas de dados</li>
                  </ul>
                  <div className="tags-tecnologia">
                    <span>Power BI</span>
                    <span>Azure Data Factory</span>
                    <span>SQL Server</span>
                    <span>Python</span>
                    <span>Excel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="habilidades">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Habilidades Técnicas</h2>
              <p>Tecnologias e ferramentas que domino</p>
            </div>
            <div className="conteudo-habilidades">
              <div className="categoria-habilidades">
                <h3>Linguagens de Programação</h3>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Python</span>
                    <span>90%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>SQL</span>
                    <span>85%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>R</span>
                    <span>60%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>

              <div className="categoria-habilidades">
                <h3>Azure & Business Intelligence</h3>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Power BI</span>
                    <span>90%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Azure Data Factory</span>
                    <span>80%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="item-habilidade">
                  <div className="info-habilidade">
                    <span>Azure Databricks</span>
                    <span>75%</span>
                  </div>
                  <div className="barra-habilidade">
                    <div className="progresso-habilidade" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section id="idiomas" className="idiomas">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Idiomas</h2>
              <p>Competências linguísticas para comunicação global</p>
            </div>
            
            <div className="grade-idiomas">
              <div className="cartao-idioma">
                <div className="cabecalho-idioma">
                  <span className="bandeira">🇺🇸</span>
                  <h3>Inglês</h3>
                </div>
                <div className="nivel-idioma">
                  <span className="nivel-texto">Fluente</span>
                  <div className="barra-progresso">
                    <div className="progresso" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="habilidades-idioma">
                  <div className="habilidade">
                    <span>Leitura</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>Escrita</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>Conversação</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cartao-idioma">
                <div className="cabecalho-idioma">
                  <span className="bandeira">🇪🇸</span>
                  <h3>Espanhol</h3>
                </div>
                <div className="nivel-idioma">
                  <span className="nivel-texto">Intermediário</span>
                  <div className="barra-progresso">
                    <div className="progresso" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="habilidades-idioma">
                  <div className="habilidade">
                    <span>Leitura</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>Escrita</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                  <div className="habilidade">
                    <span>Conversação</span>
                    <div className="pontos">
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto ativo"></div>
                      <div className="ponto"></div>
                      <div className="ponto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificacoes" className="certificacoes">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Certificações</h2>
              <p>Cursos e eventos que contribuíram para minha formação profissional</p>
            </div>
            
            <div className="grade-certificacoes">
              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  🏆
                </div>
                <div className="conteudo-certificacao">
                  <h3>Global Game Jam Curitiba 2023</h3>
                  <p className="instituicao">PUCPR - Escola Politécnica</p>
                  <p className="periodo">03/02/2023 - 05/02/2023</p>
                  <p className="descricao">
                    Participação no evento Global Game Jam, desenvolvendo jogos digitais 
                    de forma colaborativa e aplicando conceitos de programação e design.
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">Game Development</span>
                    <span className="tag-habilidade">Trabalho em Equipe</span>
                    <span className="tag-habilidade">Programação</span>
                  </div>
                </div>
              </div>

              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  📚
                </div>
                <div className="conteudo-certificacao">
                  <h3>CC50: Introdução à Ciência da Computação</h3>
                  <p className="instituicao">Harvard - Curso Original Legendado</p>
                  <p className="periodo">23/02/2022 • 70 horas</p>
                  <p className="descricao">
                    Curso fundamental de ciência da computação da Universidade de Harvard, 
                    abordando programação desde Scratch até desenvolvimento web com Flask.
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">Scratch</span>
                    <span className="tag-habilidade">C</span>
                    <span className="tag-habilidade">Arrays</span>
                    <span className="tag-habilidade">Algoritmos</span>
                    <span className="tag-habilidade">Estruturas de Dados</span>
                    <span className="tag-habilidade">Python</span>
                    <span className="tag-habilidade">SQL</span>
                    <span className="tag-habilidade">HTML/CSS/JS</span>
                    <span className="tag-habilidade">Flask</span>
                  </div>
                </div>
              </div>

              <div className="cartao-certificacao">
                <div className="icone-certificacao">
                  🔒
                </div>
                <div className="conteudo-certificacao">
                  <h3>Ethical Hacking</h3>
                  <p className="instituicao">PUCPR - Curso Eletivo</p>
                  <p className="periodo">2022 - 2023</p>
                  <p className="descricao">
                    Curso eletivo focado em segurança de sistemas, onde aprendi técnicas 
                    para segurança de código, métodos de invasão ética e proteção de redes.
                  </p>
                  <div className="habilidades-certificacao">
                    <span className="tag-habilidade">Segurança de Código</span>
                    <span className="tag-habilidade">Penetration Testing</span>
                    <span className="tag-habilidade">Segurança de Redes</span>
                    <span className="tag-habilidade">Ethical Hacking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="projetos">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Projetos em Destaque</h2>
              <p>Alguns dos meus principais trabalhos e realizações</p>
            </div>
            
            <div className="aviso-nda">
              <p>
                <em>* Por conta de NDAs assinados com as empresas com as quais trabalhei, não posso providenciar códigos fonte nem fotos dos projetos.</em>
              </p>
            </div>
            
            <div className="grade-projetos">
              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>Dashboard de Vendas Executivo</h3>
                  <span className="tipo-projeto">Power BI & Azure</span>
                </div>
                <p>
                  Dashboard interativo desenvolvido em Power BI para análise de vendas executiva, 
                  integrando dados de múltiplas fontes via Azure Data Factory. Reduziu tempo
                  e melhorou a tomada de decisões estratégicas.
                </p>
                <div className="pilha-tecnologias">
                  <span>Power BI</span>
                  <span>Azure Data Factory</span>
                  <span>SQL Server</span>
                  <span>DAX</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>Pipeline de ETL Automatizado</h3>
                  <span className="tipo-projeto">Azure Data Engineering</span>
                </div>
                <p>
                  Implementação de pipeline completo de ETL usando Azure Data Factory e Databricks 
                  para processamento de dados de vendas em tempo real. Processamento de 1M+ registros 
                  diários com 99.9% de confiabilidade.
                </p>
                <div className="pilha-tecnologias">
                  <span>Azure Data Factory</span>
                  <span>Azure Databricks</span>
                  <span>Python</span>
                  <span>Apache Spark</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>Data Warehouse Corporativo</h3>
                  <span className="tipo-projeto">Arquitetura de Dados</span>
                </div>
                <p>
                  Arquitetura e implementação de Data Warehouse na Azure Cloud para centralização 
                  de dados corporativos. Integração de 15+ fontes de dados com modelagem dimensional 
                  otimizada para análises.
                </p>
                <div className="pilha-tecnologias">
                  <span>Azure Synapse</span>
                  <span>SQL Server</span>
                  <span>Azure Data Factory</span>
                  <span>Power BI</span>
                </div>
              </div>

              <div className="cartao-projeto">
                <div className="cabecalho-projeto">
                  <h3>Automação de Relatórios Financeiros</h3>
                  <span className="tipo-projeto">Business Intelligence</span>
                </div>
                <p>
                  Automação completa de relatórios financeiros mensais utilizando Power BI e Azure. 
                  Redução de ~45% no tempo de preparação de relatórios e eliminação de erros manuais 
                  através de validações automatizadas.
                </p>
                <div className="pilha-tecnologias">
                  <span>Power BI</span>
                  <span>Azure Data Factory</span>
                  <span>Python</span>
                  <span>Excel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="contato">
          <div className="container">
            <div className="cabecalho-secao">
              <h2>Entre em Contato</h2>
              <p>Vamos conversar sobre oportunidades e projetos</p>
            </div>
            
            <div className="conteudo-contato">
              <div className="info-contato">
                <div className="item-contato">
                  <div className="icone-contato">
                    <span>💬</span>
                  </div>
                  <div className="detalhes-contato">
                    <h3>Whatsapp</h3>
                    <a href="tel:+5541992253300">(41) 99225-3300</a>
                  </div>
                </div>
                
                <div className="item-contato">
                  <div className="icone-contato">
                    <span>✉️</span>
                  </div>
                  <div className="detalhes-contato">
                    <h3>Email</h3>
                    <a href="mailto:thierrypguimaraes@gmail.com">thierrypguimaraes@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="formulario-contato">
                <h3>Envie uma Mensagem</h3>
                <form className="formulario">
                  <div className="grupo-formulario">
                    <input type="text" placeholder="Seu Nome" required />
                  </div>
                  <div className="grupo-formulario">
                    <input type="email" placeholder="Seu Email" required />
                  </div>
                  <div className="grupo-formulario">
                    <input type="text" placeholder="Assunto" required />
                  </div>
                  <div className="grupo-formulario">
                    <textarea placeholder="Sua Mensagem" rows={5} required></textarea>
                  </div>
                  <button type="submit" className="botao botao-primario">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
            
            <div className="links-sociais">
              <h3>Conecte-se Comigo</h3>
              <div className="icones-sociais">
                <a href="https://www.linkedin.com/in/thierry-guimaraes/" className="icone-social linkedin" target="_blank" rel="noopener noreferrer">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/ThierryPrado" className="icone-social github" target="_blank" rel="noopener noreferrer">
                  <span>⚡</span>
                  <span>GitHub</span>
                </a>
                <a href="mailto:thierrypguimaraes@gmail.com" className="icone-social email">
                  <span>📧</span>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="rodape">
        <div className="container">
          <div className="conteudo-rodape">
            <div className="rodape-esquerda">
              <h3>Thierry Prado</h3>
              <p>Engenheiro de Dados Azure</p>
            </div>
            <div className="rodape-direita">
              <p>&copy; 2025 Thierry Prado. Todos os direitos reservados.</p>
              <p>Desenvolvido com React e muito Monster :)</p>  
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
