# Sports-Team-Analysis (EDA) Project

This project analyzes the performance of different cricket players categorized into Openers, Middle Order, Finishers, All-rounders, and Fast Bowlers using data collected via web scraping and visualized with Power BI.

## Project Overview
In cricket, roles play a significant part in defining the outcome of a match. This project aims to conduct a detailed analysis of the following roles:
- **Openers (0-2)**
- **Middle Order (3-5)**
- **Finishers (6)**
- **All-rounders (7-8)**
- **Fast Bowlers (9-11)**

### Steps Involved

#### 1. Data Collection
- Gathered data using **web scraping** techniques.

#### 2. Data Cleaning & Preparation
1. **Scorecard:**
   - Loaded match results from a JSON file.
   - Converted the data into a dataframe, ensuring `scorecard` is unique, renamed as `match_id`.
   
2. **Batting Summary:**
   - Loaded the file and created an array `all-records[]` to store all "batting summary" data.
   - Added a new column to indicate whether a player was out or not.
   - Removed the dismissal column and updated rows for each batsman.
   
3. **Bowling Summary:**
   - Created a new array `all-records[]` to store bowling summary data.
   - Generated `match_id` from the `match_ids` dictionary.
   - Converted the data into a CSV file.
   
4. **Player Information:**
   - Loaded player information, created a dataframe, and saved it as a CSV file.

#### 3. Power BI Data Transformation
1. Opened all four CSV files in Power BI.
2. Standardized and cleaned headings across all files.
3. Removed captain annotations (like `(c)` from player names).
4. Removed duplicate entries from the `dim_players` table.
5. **Match Summary:**
   - Added a `stage` column to differentiate between "Qualifier" and "Super 12" stages of the competition.
   
6. **Bowling Summary (Fact):**
   - Split data, changed headings, and cleaned values.
   - Adjusted over values from formats like `2.5` to `2-5`.
   - Created a new column `balls`, calculated using the formula: `0.1 * 6 + 0.2`.
   
7. **Batting Summary (Fact):**
   - Cleaned headings and changed the `out/not out` column to binary values (0 for not out, 1 for out).

#### 4. Data Modeling and Visualization
- Linked `fact_bowling_summary` to `dim_players` and `fact_batting_summary` to `dim_players` in Power BI.
- Created **DAX**-based key measures for both batting and bowling, including:
  - **Batting Metrics:** Average balls faced, batting average, boundary percentage, strike rate, total runs, etc.
  - **Bowling Metrics:** Bowling average, economy rate, dot ball percentage, wickets taken, etc.
- Added boundary runs columns for both batting and bowling summaries.

#### 5. Dashboard and Insights
Built an interactive dashboard in Power BI to derive insights on player performance, especially focusing on:
- Openers
- Middle Order
- Finishers
- All-rounders
- Fast Bowlers


## Technology Stack
- **Data Collection:** Web scraping (JavaScript)
- **Data Cleaning & Transformation:** Python (Pandas), CSV files
- **Visualization & Analytics:** Power BI
- **Modeling & Calculations:** DAX
