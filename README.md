# 📊 EA Dashboard - SAP UI5 Application

**EA Dashboard** è un'applicazione SAP UI5 sviluppata per monitorare e analizzare le metriche di performance degli Expert Advisor (EA) nei test di backtest. Questa dashboard intuitiva consente agli utenti di aggiungere, visualizzare e gestire i dati di test, rendendo il processo di valutazione degli EA più efficiente e strutturato.

## 🌟 Funzionalità

- **Visualizzazione delle Metriche di Performance**: Mostra i principali KPI, come Win Rate, Drawdown, Sharpe Ratio e altro.
- **Gestione dei Test**: Permette di aggiungere, eliminare e salvare i test, facilitando l’organizzazione delle performance dei backtest.
- **Lista Dinamica dei Test**: Visualizza un elenco sintetico di test con metriche chiave, come Win Rate e Net Profit, per una consultazione rapida.

## 📋 Dettagli delle Metriche

1. **Win Rate Short**: Percentuale di successo nelle operazioni short.
2. **Win Rate Long**: Percentuale di successo nelle operazioni long.
3. **Win Rate Totale**: Percentuale complessiva di successo.
4. **Max Drawdown (Absolute)**: Massimo drawdown in valore assoluto.
5. **Max Drawdown (Percentage)**: Massimo drawdown in percentuale.
6. **Sharpe Ratio**: Rapporto rischio-rendimento.
7. **Profit Factor**: Rapporto tra profitti e perdite.
8. **Recovery Factor**: Capacità di recuperare dalle perdite.
9. **Total Trades**: Numero totale di operazioni eseguite.
10. **Consecutive Losses**: Numero massimo di perdite consecutive.
11. **Max Consecutive Losses Value**: Valore delle perdite consecutive massime.

## 📦 Configurazione dell'App

### Informazioni Generali

| Dettaglio                     | Valore                        |
| ----------------------------- | ----------------------------- |
| **Generazione**               | Sun Aug 18 2024               |
| **Generatore**                | @sap/generator-fiori-freestyle |
| **Versione Generatore**       | 1.11.2                        |
| **Piattaforma di Sviluppo**   | Visual Studio Code            |
| **Tema UI5**                  | sap_horizon                   |
| **Versione SAP UI5**          | 1.127.0                       |

### Moduli e Librerie

- **Nome Modulo**: `project2`
- **Librerie UI5**: `sap.m`, `sap.ui.layout`, `sap.ui.core`
- **Tema UI5**: `sap_horizon`

## 🚀 Avvio dell'Applicazione

Per avviare l'applicazione, utilizza il comando:

```bash
npm start
```

### 📋 Prerequisiti

- **NodeJS**: Assicurati di avere una versione LTS (Long Term Support) di NodeJS installata. ([nodejs.org](https://nodejs.org))

## 🛠️ Struttura dell'App

### Componenti della UI

- **Form Principale delle Metriche**: Campo di input per ciascuna metrica chiave.
- **Toolbar per la Gestione dei Test**: Pulsanti per aggiungere, eliminare e salvare i test.
- **Lista Dinamica dei Test**: Visualizza le descrizioni dei test, tra cui Win Rate e Net Profit.

### Configurazione del Router

Il routing è configurato per gestire la navigazione e il caricamento asincrono, garantendo che la vista principale sia accessibile immediatamente all’avvio.

## 📄 Licenza

Questo progetto è distribuito sotto la licenza **MIT**.

