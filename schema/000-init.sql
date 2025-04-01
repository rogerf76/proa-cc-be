-- Table to track execution of scripts that create and maintain the schema
-- Scripts should always be executed in order
-- Each script must only be executed once
CREATE TABLE schema_log (
    ID SERIAL PRIMARY KEY,
    -- The date and time when the script was executed
    time_executed_utc TIMESTAMP NOT NULL,
    -- Name of the executed script
    script_name VARCHAR(255) NOT NULL       
);

-- Boilerplate, at the end of every script insert an entry for this script into schema_log
INSERT INTO schema_log (time_executed_utc, script_name)
VALUES (NOW() AT TIME ZONE 'UTC', '000-init.sql');

