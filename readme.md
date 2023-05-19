## Friday, May 19, 2023

```
➜ turso db list
NAME        LOCATIONS                   URL                                        SIZE
jaimito     den, dfw (primary), lax     libsql://jaimito-jjaimealeman.turso.io     0 B
```
➜ turso db show jaimito
Name:           jaimito
URL:            libsql://jaimito-jjaimealeman.turso.io
ID:             bb83475b-f60f-11ed-9d02-f28bd1fbbb2c
Locations:      den, dfw, lax
Size:           68 KiB

Database Instances:
NAME                    TYPE        LOCATION     VERSION
loving-spyke            primary     dfw          0.15.0
stirring-vampirella     replica     lax          0.15.0
suitable-glitter        replica     den          0.15.0


➜ turso db tokens create jaimito
eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODQ1MTI4MzUsImlkIjoiYmI4MzQ3NWItZjYwZi0xMWVkLTlkMDItZjI4YmQxZmJiYjJjIn0.-XKWRErjmbuqxqu-OeHz0Sc7miwGGm0h5AhUHMyJrmVB1oBdkL_D_0xG1xH8aFyeG7_3BGuZeaKhLbz59MD3Cw
