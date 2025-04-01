-- Boilerplate, at the start of every script check if this script has already been run once
DO $$
BEGIN
    -- Check if the entry exists in the schema_log table
    IF EXISTS (
        SELECT 1
        FROM schema_log
        WHERE script_name = '002-add-measurements-table.sql'
    ) THEN
        -- Raise an exception to stop the script
        RAISE EXCEPTION 'Script ''002-add-measurements-table.sql'' has already been executed. Stopping script execution.';
    END IF;
END $$;


-- Create table to store property locations
CREATE TABLE measurements (
    id SERIAL PRIMARY KEY,
    -- Joins to property_locations table on property_id
    property_id INT NOT NULL,
    -- Should use variable_id instead of variable_name for performance, normalization, etc.
    -- But for the purpose of this test, variable name is simpler to import, understand, debug, etc.
    -- Joins to variables table on variable_name
    variable_name TEXT NOT NULL,
    value REAL NOT NULL,
    -- As-is no timezone
    timestamp TIMESTAMP NOT NULL
);

CREATE TABLE variables (
    id SERIAL PRIMARY KEY,
    variable_id INT NOT NULL,
    variable_name TEXT NOT NULL,
    long_name TEXT NOT NULL,
    unit TEXT NOT NULL
);

-- Boilerplate, at the end of every script insert an entry for this script into schema_log
INSERT INTO schema_log (time_executed_utc, script_name)
VALUES (NOW() AT TIME ZONE 'UTC', '002-add-measurements-table.sql');
