defmodule IpseityWeb.Router do
  use IpseityWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {IpseityWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", IpseityWeb do
    pipe_through :browser

    get "/", PageController, :home
    get "/about", PageController, :about
    get "/projects", PageController, :projects
    get "/blog", PageController, :blog
    get "/blog/:post", PageController, :post
    get "/search", PageController, :search
    # get "/login", PageController, :login
    # get "/contact", PageController, :contact
    # get "/privacy", PageController, :privacy
    # get "/terms", PageController, :terms
    # get "/sitemap.xml", PageController, :sitemap
    # get "/robots.txt", PageController, :robots


  end

  # Other scopes may use custom stacks.
  scope "/api/:version", IpseityWeb do
    pipe_through :api
    # routes to be used by external apps
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:ipseity, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: IpseityWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
