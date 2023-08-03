defmodule IpseityWeb.PageController do
  use IpseityWeb, :controller

  def home(conn, _params) do
    projects = [
      %{
        hero: "https://file.swayechateau.com/view/swayechateauWLGYnBgsrYxGZSputQx822",
        title: "The Coldest Sunset",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        tags: ["photography", "travel", "winter"],
        open_source: true,
        git_repo: "https://github.com/swayechateau/fileserver",
        live_url: "https://file.swayechateau.com",
        case_study: "https://blog.swayechateau.com/post/building-a-file-server-api"
      },
      %{
        hero: "https://file.swayechateau.com/view/globaliyndTnSCK14onpASVq7n5?share_code=s5LUL0lAdDLS",
        title: "File Server",
        excerpt: "Custom built CDN for my media files.",
        tags: ["markdown", "lumen", "microservice", "mariadb", "api"],
        open_source: true,
        git_repo: "https://github.com/swayechateau/fileserver",
        live_url: "https://file.swayechateau.com",
        case_study: "https://blog.swayechateau.com/post/building-a-file-server-api"
      },
      %{
        hero: "https://file.swayechateau.com/view/globalMaJKf2UDzFdqba7hG96U6?share_code=s6LHjQlIsFHc",
        title: "Web Meta Grabber",
        excerpt: "I Wanted an api I had permissions to use to get the meta data from websites for a chat application I was building.",
        tags: ["markdown", "lumen", "microservice", "php", "api"],
        open_source: true,
        git_repo: "https://github.com/swayechateau/web-meta-grabber",
        live_url: "https://meta.swayechateau.com/",
        case_study: "https://blog.swayechateau.com/posts/web-meta-grabber"
      }
    ]

    posts = [
      %{
        hero: "https://picsum.photos/id/188/720/400",
        title: "Cities are crowded",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        read_time: 4,
        tags: ["case_study", "api", "php"],
        slug: "cities-are-crowded",
        posted_at: "2021-10-29"
      },
      %{
        hero: "https://picsum.photos/id/1016/720/400",
        title: "Mountains are alone",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        read_time: 5,
        tags: ["case_study", "api", "php"],
        slug: "mountains-are-alone",
        posted_at: "2021-10-29"
      },
      %{
        hero: "https://picsum.photos/id/1011/720/400",
        title: "Lakes are silent",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        read_time: 2,
        tags: ["case_study", "api", "php"],
        slug: "lakes-are-silent",
        posted_at: "2021-10-29"
      }
    ]

    conn
    |> assign(:projects, projects)
    |> assign(:posts, posts)
    |> render(:home, layout: {IpseityWeb.Layouts, :app})
  end

  def about(conn, _params) do
    render(conn, :about, layout: {IpseityWeb.Layouts, :app})
  end

  def projects(conn, _params) do
    conn
    |> assign(:all_projects, ["Project 1", "Project 2", "Project 3"])
    |> assign(:page_title, "Projects")
    |> render(:projects, layout: {IpseityWeb.Layouts, :app})
  end

  def tags(conn, _params) do
    render(conn, :tags, layout: {IpseityWeb.Layouts, :app})
  end

  def search(conn, _params) do
    render(conn, :search, layout: {IpseityWeb.Layouts, :app})
  end

  # def contact(conn, _params) do
  #   render(conn, :contact, layout: false)
  # end

  # def privacy(conn, _params) do
  #   render(conn, :privacy, layout: false)
  # end

  def blog(conn, _params) do
    render(conn, :blog, layout: {IpseityWeb.Layouts, :app})
  end

  def post(conn, %{"post" => post}) do
    render(conn, :post, post: post, layout: {IpseityWeb.Layouts, :app})
  end

end
