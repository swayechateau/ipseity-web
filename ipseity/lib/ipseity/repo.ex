defmodule Ipseity.Repo do
  use Ecto.Repo,
    otp_app: :ipseity,
    adapter: Ecto.Adapters.Postgres
end
