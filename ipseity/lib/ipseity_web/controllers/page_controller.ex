defmodule IpseityWeb.PageController do
  use IpseityWeb, :controller

  def home(conn, _params) do
    render(conn, :home, layout: false)
  end

  def about(conn, _params) do
    render(conn, :about, layout: false)
  end

  def projects(conn, _params) do
    render(conn, :projects, layout: false)
  end

  def tags(conn, _params) do
    render(conn, :tags, layout: false)
  end

  def search(conn, _params) do
    render(conn, :search, layout: false)
  end

  # def contact(conn, _params) do
  #   render(conn, :contact, layout: false)
  # end

  # def privacy(conn, _params) do
  #   render(conn, :privacy, layout: false)
  # end

  def blog(conn, _params) do
    render(conn, :blog, layout: false)
  end

  def post(conn, _params) do
    render(conn, :post, layout: false)
  end

end
