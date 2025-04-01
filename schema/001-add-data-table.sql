-- Boilerplate, at the start of every script check if this script has already been run once
DO $$
BEGIN
    -- Check if the entry exists in the schema_log table
    IF EXISTS (
        SELECT 1
        FROM schema_log
        WHERE script_name = '001-add-data-table.sql'
    ) THEN
        -- Raise an exception to stop the script
        RAISE EXCEPTION 'Script ''001-add-data-table.sql'' has already been executed. Stopping script execution.';
    END IF;
END $$;


-- Create table to store property locations
CREATE TABLE property_locations (
    id SERIAL PRIMARY KEY,
    -- Property details
    ws_name TEXT NOT NULL,
    site TEXT NOT NULL,
    portfolio TEXT NOT NULL,
    state TEXT NOT NULL,
    -- Geographic coordinates
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL
);

-- Boilerplate, at the end of every script insert an entry for this script into schema_log
INSERT INTO schema_log (time_executed_utc, script_name)
VALUES (NOW() AT TIME ZONE 'UTC', '001-add-data-table.sql');
