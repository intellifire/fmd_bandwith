# IntelliFire Bandwidth Report

## How it works

This workflow:

1. Runs at 00:00, 03:00, 06:00, 09:00, 12:00, 15:00, 18:00 and 21:00 MDT
2. connects to a iPerf3 host on the target on port 8881.
3. It does a 10 second bandwidth test UP and Down.
4. Writes the results to this file.

### Test Results


- `2/23/2023, 2:30:12 PM:` UP: `110.46`/MBs DOWN:`107.48`/MBs
- `2/23/2023, 3:02:41 PM:` UP: `143.45`/MBs DOWN:`141.44`/MBs
