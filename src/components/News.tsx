import React from "react"
import useApplicationData from "./hooks/useApplicationData"
import List from "@material-ui/core/List"
import ListItem, { ListItemProps } from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import * as moment from "moment"

interface Props {
  children: string
}

function ListItemLink(props: ListItemProps<"a", { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const News = () => {
  const { news } = useApplicationData()

  return (
    <Card variant="outlined" className="dark">
      <CardContent className="dark">
        <Typography variant="h5" component="h2">
          News
        </Typography>
        <Divider />
        <List>
          {news.map((article: any, index: number) => {
            return (
              <ListItemLink key={index} href={article.url} className="dark">
                {article.url && (
                  <>
                    <ListItemText
                      primary={article.title}
                      secondary={moment(article.created_at).calendar()}
                      className="dark"
                    />
                  </>
                )}
              </ListItemLink>
            )
          })}
        </List>
      </CardContent>
    </Card>
  )
}

export default News
