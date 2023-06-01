docker build --no-cache -f SQL\Dockerfile.PostgreSql -t abc/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t abc/app ../..
