/*
  # Create Quote Submission Tables

  ## Overview
  Creates two separate tables for capturing quote requests from the website:
  one for residential projects and one for commercial projects.

  ## New Tables

  ### residential_quotes
  - `id` (uuid, primary key) — unique identifier
  - `name` (text) — full name of the requester
  - `email` (text) — contact email
  - `phone` (text) — contact phone number (optional)
  - `service` (text) — type of service requested
  - `message` (text) — project details
  - `created_at` (timestamptz) — submission timestamp

  ### commercial_quotes
  - `id` (uuid, primary key) — unique identifier
  - `name` (text) — full name of the requester
  - `email` (text) — contact email
  - `phone` (text) — contact phone number (optional)
  - `service` (text) — type of service requested
  - `message` (text) — project details
  - `created_at` (timestamptz) — submission timestamp

  ## Security
  - RLS enabled on both tables
  - Public INSERT allowed so anonymous visitors can submit quote requests
  - No SELECT/UPDATE/DELETE for public — only authenticated users (admins) can read data
*/

CREATE TABLE IF NOT EXISTS residential_quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE residential_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a residential quote"
  ON residential_quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read residential quotes"
  ON residential_quotes
  FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS commercial_quotes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE commercial_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a commercial quote"
  ON commercial_quotes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read commercial quotes"
  ON commercial_quotes
  FOR SELECT
  TO authenticated
  USING (true);
